export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_PRODUTO = "UPDATE_PRODUTO";

export const addProdutoHeader = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

export const removeProdutoHeader = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

export const updateQuantidadeHeader = (produtoId, quantidade) => ({
  type: UPDATE_PRODUTO,
  payload: { produtoId, quantidade },
});

export const carrinhoReducer = (state, header) => {
  switch (header.type) {
    case ADD_PRODUTO:
      const novoProduto = header.payload;
      const produto = state.findIndex((item) => item.id === novoProduto.id);
      if (produto === -1) {
        novoProduto.quantidade = 1;
        return [...state, novoProduto];
      } else {
        return state.map((item, index) =>
          index === produto
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

    case REMOVE_PRODUTO:
      const produtoId = header.payload;
      return state.filter((item) => item.id !== produtoId);

    case UPDATE_PRODUTO:
      const { produtoId: id, quantidade } = header.payload;
      return state.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      );
  }
};
