import React, { useState } from "react";
// Criando Context para resolver o problema de prop drilling
export const CarrinhoContext = React.createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidade,
        setQuantidade,
        valorTotal,
        setValorTotal
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
