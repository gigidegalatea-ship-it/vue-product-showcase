export default {
  namespaced: true,

  state: () => ({
    favorites: [],
  }),

  mutations: {
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },

    ADD_FAVORITE(state, product) {
      if (!state.favorites.some((favorite) => favorite.id === product.id)) {
        state.favorites.push(product);
      }
    },

    REMOVE_FAVORITE(state, productId) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== productId
      );
    },
  },

  actions: {
    addFavorite({ commit }, product) {
      commit("ADD_FAVORITE", product);
    },

    removeFavorite({ commit }, productId) {
      commit("REMOVE_FAVORITE", productId);
    },
  },

  getters: {
    allFavorites: (state) => state.favorites,

    isFavorite: (state) => (productId) =>
      state.favorites.some((favorite) => favorite.id === productId),
  },
};
