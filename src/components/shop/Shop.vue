<template>
  <div class="row">
    <div class="col-xs-12">
      <page-header></page-header>
    </div>

    <div class="col-xs-12">
      <coupons></coupons>
    </div>

    <div class="col-xs-12 col-sm-3">
      <shopping-cart></shopping-cart>
    </div>
    <div class="col-xs-12 col-sm-9">
      <product-list></product-list>
    </div>

  </div>
</template>

<script>
  import PageHeader from './../shared/PageHeader'
  import Coupons from './Coupons'
  import ProductList from './products/ProductList'
  import ShoppingCart from './shopping-cart/ShoppingCart'

  export default {
    name: 'shop',
    components: {
      PageHeader,
      Coupons,
      ProductList,
      ShoppingCart
    }
  }
</script>
