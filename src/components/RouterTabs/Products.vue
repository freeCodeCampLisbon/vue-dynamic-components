<template>
  <div>
    <h1>Products</h1>
    <div class="products-list">
      <div
        class="products-list__product-wrapper"
        v-for="product in products"
        :key="product.id"
      >
        <div class="products-list__product-wrapper__item">
          <img :src="product.image" />
          <h2 v-text="product.name" />
          <span>€{{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      products: [
        {
          id: Symbol(),
          name: "Car",
          price: 20,
          image: "http://lorempixel.com/640/480/animals"
        },
        {
          id: Symbol(),
          name: "Vegetables",
          price: 5,
          image: "http://lorempixel.com/640/480/animals"
        },
        {
          id: Symbol(),
          name: "House items",
          price: 500,
          image: "http://lorempixel.com/640/480/food"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.products-list__product-wrapper {
  flex: 1 1 32%;
  max-width: 32%;
  padding: 10px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.products-list__product-wrapper__item img {
  max-width: 100%;
  height: auto;
}
@media screen and (max-width: 960px) {
  .products-list__product-wrapper {
    flex: 1 1 49%;
    max-width: 49%;
  }
}
@media screen and (max-width: 768px) {
  .products-list__product-wrapper {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
