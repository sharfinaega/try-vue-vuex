<template>
  <div class="container">
    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details> </v-text-field>
    <v-data-table :headers="headers" :items="products" :search="search" :rows-per-page-items="[5, 10, 25]" rows-per-page-text :sort-desc="[false, true]" multi-sort>
      <template v-slot:items="props">
        <td>{{ props.item._id }}</td>
        <td class="text-xs-right">{{ props.item.product }}</td>
        <td class="text-xs-right">{{ props.item.manufacturer }}</td>
        <td class="text-xs-right">{{ props.item.category }}</td>
      </template>
      <template v-slot:pageText="props"> Page {{ props.pageStart }} - {{ props.pageStop }} from {{ props.itemsLength }} </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning"> Your search for "{{ search }}" found no results. </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: "false",
          value: "name"
        },
        { text: "Product", value: "product" },
        { text: "Manufacturer", value: "manufacturer" },
        { text: "Category", value: "category" }
      ]
    };
  },
  created() {
    this.$store.dispatch("loadProducts");
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>
