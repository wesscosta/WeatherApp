import React, { useRef, useEffect } from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';

// Obtém a largura da tela para calcular o tamanho do carrossel
const { width } = Dimensions.get('window');

// Configurações do carrossel
const ITEM_WIDTH = 380; // Largura de cada item
const SPACING = 10; // Espaçamento entre os itens
const INTERVAL = 3000; // Tempo de rolagem automática (3s)

// Lista de imagens usando 'require' para carregar imagens locais
const images = [
  require('../assets/rec-bolo-chocolocate.jpg'),
  require('../assets/rec-brigadeiro.jpg'),
  require('../assets/rec-panqueca.jpg'),
  require('../assets/rec-salada.jpg'),
];

// Duplicamos a lista para criar o efeito de carrossel infinito
const infiniteImages = [...images, ...images];

const HorizontalGallery = () => {
  const flatListRef = useRef(null);
  const scrollPosition = useRef(0);

  // Efeito para fazer a rolagem automática
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

  // Função que detecta a rolagem e cria o efeito de loop infinito
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
};

const styles = StyleSheet.create({
  photoContainer: {
    width: ITEM_WIDTH,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING,
    borderRadius: 10,
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HorizontalGallery;
