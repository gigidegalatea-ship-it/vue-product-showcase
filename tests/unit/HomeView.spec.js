import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("muestra un mensaje cuando ocurre un error al cargar la API", () => {
    const store = createStore({
      modules: {
        products: {
          namespaced: true,
          state: () => ({
            products: [],
            loading: false,
            error: "No se pudieron cargar los productos.",
          }),
          getters: {
            allProducts: (state) => state.products,
            isLoading: (state) => state.loading,
            hasError: (state) => state.error !== null,
          },
          actions: {
            fetchProducts: jest.fn(),
          },
        },
        filters: {
          namespaced: true,
          state: () => ({
            searchTerm: "",
            selectedCategory: "all",
          }),
          getters: {
            searchTerm: (state) => state.searchTerm,
            selectedCategory: (state) => state.selectedCategory,
          },
          actions: {
            setSearch: jest.fn(),
            setCategory: jest.fn(),
          },
        },
      },
    });

    const wrapper = mount(HomeView, {
      global: {
        plugins: [store],
        stubs: {
          AppHeader: true,
          ProductFilter: true,
          ProductList: true,
        },
      },
    });

    expect(wrapper.text()).toContain("No se pudieron cargar los productos.");
  });
});
