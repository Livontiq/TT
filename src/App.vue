<script>
import Header from './components/layout/Header.vue'
import CartTotal from './components/cart/CartTotal.vue'
import './assets/css/style.css'

export default {
  components: {
    Header,
    CartTotal,
  },
}
</script>

<template>
  <div class="main">
    <Header />
    <CartTotal />
  </div>
</template>

<style scoped>
.main {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0px 80px;
}
</style>
