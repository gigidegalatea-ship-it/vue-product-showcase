<template>
  <section class="product-filter" aria-labelledby="filter-title">
    <h2 id="filter-title">Filtrar productos</h2>

    <div class="product-filter__group">
      <label for="product-search">Buscar producto</label>

      <el-input
        id="product-search"
        v-model="search"
        class="product-filter__input"
        type="search"
        placeholder="Buscar por nombre..."
      />
    </div>

    <div class="product-filter__group">
      <label for="product-category">Categoría</label>

      <el-select
        id="product-category"
        v-model="category"
        class="product-filter__select"
        aria-label="Categoría"
      >
        <el-option label="Todas las categorías" value="all" />

        <el-option
          v-for="item in categories"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const search = computed({
  get: () => store.getters["filters/searchTerm"],
  set: (value) => store.dispatch("filters/setSearch", value),
});

const category = computed({
  get: () => store.getters["filters/selectedCategory"],
  set: (value) => store.dispatch("filters/setCategory", value),
});

const categories = computed(() => {
  const products = store.getters["products/allProducts"];

  return [...new Set(products.map((product) => product.category))].sort();
});
</script>
