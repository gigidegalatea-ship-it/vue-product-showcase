<template>
  <article class="product-card">
    <img
      class="product-card__image"
      :src="product.thumbnail"
      :alt="product.title"
    />

    <div class="product-card__body">
      <span class="product-card__category">
        {{ product.category }}
      </span>

      <h2 class="product-card__title">
        {{ product.title }}
      </h2>

      <p class="product-card__description">
        {{ product.description }}
      </p>

      <p class="product-card__price">${{ product.price }}</p>

      <div class="product-card__actions">
        <el-button
          class="product-card__button"
          type="primary"
          tag="router-link"
          :to="`/productos/${product.id}`"
        >
          Ver detalle
        </el-button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
