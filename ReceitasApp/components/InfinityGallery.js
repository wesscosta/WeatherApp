import React, { useRef, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Dimensions } from "react-native";
import { useReceitas } from "../context/ReceitasContext"; // Importando o contexto

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.86;
const SPACING = 10;
const INTERVAL = 3000;

export default function InfinityGallery() {
  const { receitas } = useReceitas(); // Obtendo as receitas do contexto
  
  // Extraindo apenas as imagens das receitas
  const images = receitas.map((receita) => receita.imagem);
  const infiniteImages = [...images, ...images];

  const flatListRef = useRef(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        scrollPosition.current += ITEM_WIDTH + SPACING;
        flatListRef.current.scrollToOffset({
          offset: scrollPosition.current,
          animated: true,
        });
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const totalWidth = infiniteImages.length * (ITEM_WIDTH + SPACING);

    if (offsetX >= totalWidth / 2) {
      scrollPosition.current = offsetX - totalWidth / 2;
      flatListRef.current.scrollToOffset({
        offset: scrollPosition.current,
        animated: false,
      });
    } else {
      scrollPosition.current = offsetX;
    }
  };

  return (
    <FlatList
      ref={flatListRef}
      data={infiniteImages}
      horizontal
      style={styles.container}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.photoContainer}>
          <Image source={item} style={styles.photoImage} />
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    />
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    width: ITEM_WIDTH,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING,
    borderRadius: 10,
    overflow: "hidden",
  },
  photoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
