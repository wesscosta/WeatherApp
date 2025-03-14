import React, { createContext, useState, useContext } from "react";

// Criando o Contexto
const ReceitasContext = createContext();

// Dados iniciais das receitas
const receitasIniciais = [
  {
    id: 1,
    titulo: "Bolo de Chocolate",
    categoria: "Sobremesa",
    descricao: "Um delicioso bolo de chocolate fofinho e úmido.",
    ingredientes: "Farinha, Ovos, Chocolate...",
    preparo: "Misture tudo e asse por 40min.",
    imagem: require("../assets/rec-bolo-chocolocate.jpg"),
  },
  {
    id: 2,
    titulo: "Panqueca",
    categoria: "Sobremesa",
    descricao: "Panquecas macias e saborosas.",
    ingredientes: "Farinha, Leite, Ovos...",
    preparo: "Misture tudo e frite em uma frigideira.",
    imagem: require("../assets/rec-panqueca.jpg"),
  },
  {
    id: 3,
    titulo: "Brigadeiro",
    categoria: "Doces",
    descricao: "O clássico doce brasileiro.",
    ingredientes: "Leite Condensado, Chocolate, Manteiga...",
    preparo: "Cozinhe até engrossar e enrole.",
    imagem: require("../assets/rec-brigadeiro.jpg"),
  },
  {
    id: 4,
    titulo: "Salada de Folhas",
    categoria: "Saladas",
    descricao: "Uma opção leve e saudável.",
    ingredientes: "Alface, Rúcula, Agrião...",
    preparo: "Misture os ingredientes e tempere a gosto.",
    imagem: require("../assets/rec-salada.jpg"),
  },
];

// Criando o Provider para fornecer os dados globalmente
export const ReceitasProvider = ({ children }) => {
  const [receitas, setReceitas] = useState(receitasIniciais);

  return (
    <ReceitasContext.Provider value={{ receitas, setReceitas }}>
      {children}
    </ReceitasContext.Provider>
  );
};

// Hook para facilitar o uso do contexto
export const useReceitas = () => {
  return useContext(ReceitasContext);
};
