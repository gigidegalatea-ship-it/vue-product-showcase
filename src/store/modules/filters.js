export default {
  namespaced: true,

  state: () => ({
    search: "",
    category: "all",
  }),

  mutations: {
    SET_SEARCH(state, search) {
      state.search = search;
    },

    SET_CATEGORY(state, category) {
      state.category = category;
    },
  },

  actions: {
    setSearch({ commit }, search) {
      commit("SET_SEARCH", search);
    },

    setCategory({ commit }, category) {
      commit("SET_CATEGORY", category);
    },
  },

  getters: {
    searchTerm: (state) => state.search,
    selectedCategory: (state) => state.category,
  },
};
