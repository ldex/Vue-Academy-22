<template>
  <product-list :products="products"></product-list>
</template>

<script>
import axios from 'axios'
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList
  },
  data() {
    return {
      products: []
    }
  },
  created () {
    axios
        .get('http://storerestservice.azurewebsites.net/api/products/')
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.log('There was an error getting products from server: ', error.response)
        });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
