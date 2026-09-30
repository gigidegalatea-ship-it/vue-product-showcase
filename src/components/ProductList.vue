<template>
  <section class="product-list" aria-labelledby="products-title">
    <h2 id="products-title" class="sr-only">Lista de productos</h2>

    <div class="product-list__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import ProductCard from "./ProductCard.vue";

defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
