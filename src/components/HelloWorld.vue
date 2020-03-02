<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="products in products" :key="products._id">
          <td>{{ products._id }}</td>
          <td>{{ products.product }}</td>
          <td>{{ products.manufacturer }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import store from "../store";
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  computed: mapState(["products"]),
  created() {
    this.$store.dispatch("loadProducts");
  }
  // created() {
  //   this.$store.dispatch("fetchProducts");
  //   console.log(this.$store.state.products);
  //   this.products = this.$store.state.products;
  // }
};
</script>
