<template>
  <main class="container">
    <section class="product-detail" aria-labelledby="product-detail-title">
      <router-link class="button button--secondary" to="/">
        Volver a productos
      </router-link>

      <p v-if="isLoading">Cargando información del producto...</p>

      <p v-else-if="hasError">No se pudo cargar la información del producto.</p>

      <article v-else-if="product" class="product-detail__content">
        <div class="product-detail__image-container">
          <img
            class="product-detail__image"
            :src="product.images?.[0] || product.thumbnail"
            :alt="product.title"
          />
        </div>

        <div class="product-detail__body">
          <span class="product-detail__category">
            {{ product.category }}
          </span>

          <h1 id="product-detail-title" class="product-detail__title">
            {{ product.title }}
          </h1>

          <p class="product-detail__description">
            {{ product.description }}
          </p>

          <p class="product-detail__price">${{ product.price }}</p>

          <dl class="product-detail__info">
            <div>
              <dt>Valoración</dt>
              <dd>{{ product.rating }}</dd>
            </div>

            <div>
              <dt>Stock disponible</dt>
              <dd>{{ product.stock }}</dd>
            </div>

            <div>
              <dt>Marca</dt>
              <dd>{{ product.brand || "No especificada" }}</dd>
            </div>
          </dl>

          <button
            class="button"
            type="button"
            :aria-pressed="isFavorite"
            @click="toggleFavorite"
          >
            {{ isFavorite ? "Quitar de favoritos" : "Agregar a favoritos" }}
          </button>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { computed, defineProps, onMounted } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const store = useStore();

const product = computed(() => store.getters["products/selectedProduct"]);

const isLoading = computed(() => store.getters["products/isDetailLoading"]);

const hasError = computed(() => store.getters["products/hasDetailError"]);

const isFavorite = computed(() => {
  if (!product.value) {
    return false;
  }

  return store.getters["favorites/isFavorite"](product.value.id);
});

const toggleFavorite = () => {
  if (!product.value) {
    return;
  }

  if (isFavorite.value) {
    store.dispatch("favorites/removeFavorite", product.value.id);
  } else {
    store.dispatch("favorites/addFavorite", product.value);
  }
};

onMounted(() => {
  store.dispatch("products/fetchProductById", props.id);
});
</script>
