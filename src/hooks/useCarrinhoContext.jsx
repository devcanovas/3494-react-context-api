import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import {
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  UPDATE_PRODUTO,
} from "@/reducers/carrinhoReducer";
import {
  addProdutoHeader,
  removeProdutoHeader,
  updateQuantidadeHeader,
} from "../reducers/carrinhoReducer";

export const useCarrinhoContext = () => {
  const { carrinho, dispatch, quantidade, valorTotal } =
    useContext(CarrinhoContext);

  const adicionarProduto = (novoProduto) => {
    dispatch(addProdutoHeader(novoProduto));
  };

  function removerProduto(id) {
    const produto = carrinho.find((item) => item.id === id);

    if (produto && produto.quantidade > 1) {
      dispatch(updateQuantidadeHeader(id, produto.quantidade - 1));
    } else {
      dispatch(removeProdutoHeader(id));
    }
  }

  function removerProdutoCarrinho(id) {
    dispatch(removeProdutoHeader(id));
  }

  //   Configurando o retorno do hook
  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  };
};
