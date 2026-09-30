<template>
  <div>
    <AppHeader />

    <main class="container">
      <section class="section" aria-labelledby="catalog-title">
        <h1 id="catalog-title">Product Showcase</h1>

        <p>Explora nuestra colección de productos.</p>

        <ProductFilter />

        <p v-if="isLoading">Cargando productos...</p>

        <p v-else-if="hasError">No se pudieron cargar los productos.</p>

        <ProductList v-else :products="filteredProducts" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";

const store = useStore();

const products = computed(() => store.getters["products/allProducts"]);
const isLoading = computed(() => store.getters["products/isLoading"]);
const hasError = computed(() => store.getters["products/hasError"]);

const searchTerm = computed(() => store.getters["filters/searchTerm"]);
const selectedCategory = computed(
  () => store.getters["filters/selectedCategory"]
);

const filteredProducts = computed(() => {
  const search = searchTerm.value.trim().toLowerCase();

  return products.value.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory.value === "all" ||
      product.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  store.dispatch("products/fetchProducts");
});
</script>
