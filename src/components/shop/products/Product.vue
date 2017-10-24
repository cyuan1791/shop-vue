<template>
  <div class="thumbnail">
    <img class="card-img-top img-responsive" src="http://archive.webcmsd.com/images/tree400x300.jpg
" :alt="product.title">
    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.price | formatMoney}} - Stock: {{product.inventory}}</p>
      <add-to-cart :product="product"></add-to-cart>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>
