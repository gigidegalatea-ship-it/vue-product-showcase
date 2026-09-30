import { getProductById, getProducts } from "@/services/productService";

export default {
  namespaced: true,

  state: () => ({
    products: [],
    loading: false,
    error: null,
    selectedProduct: null,
    detailLoading: false,
    detailError: null,
  }),

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_LOADING(state, loading) {
      state.loading = loading;
    },

    SET_ERROR(state, error) {
      state.error = error;
    },

    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product;
    },

    SET_DETAIL_LOADING(state, loading) {
      state.detailLoading = loading;
    },

    SET_DETAIL_ERROR(state, error) {
      state.detailError = error;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);

      try {
        const products = await getProducts();
        commit("SET_PRODUCTS", products);
      } catch (error) {
        commit("SET_ERROR", "No se pudieron cargar los productos.");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchProductById({ commit }, id) {
      commit("SET_DETAIL_LOADING", true);
      commit("SET_DETAIL_ERROR", null);
      commit("SET_SELECTED_PRODUCT", null);

      try {
        const product = await getProductById(id);
        commit("SET_SELECTED_PRODUCT", product);
      } catch (error) {
        commit(
          "SET_DETAIL_ERROR",
          "No se pudo cargar la información del producto."
        );
      } finally {
        commit("SET_DETAIL_LOADING", false);
      }
    },
  },

  getters: {
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
    selectedProduct: (state) => state.selectedProduct,
    isDetailLoading: (state) => state.detailLoading,
    hasDetailError: (state) => state.detailError !== null,
  },
};
