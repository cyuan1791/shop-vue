// import chunk from 'chunk'

const state = {
  all: []
}

const mutations = {
  INIT_PRODUCT (state, product) {
    var jsonArray = []
    for (var x in product) {
      jsonArray.push(product[x])
    }
    // console.log(jsonArray)
    // state.all = product
    state.all = jsonArray
    // console.log(product instanceof Array)
    // console.log(product.pop())
    // console.log(jsonArray.length)
    // console.log(chunk(product, 3))
  },
  RECEIVE_PRODUCTS (state, products) {
    // console.log(products)
    // products = state.myP
    state.all = products
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.id === productId)
      .inventory--
  },

  REMOVE_FROM_CART (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .inventory += removedProduct.quantity
  }
}

export default {
  state,
  mutations
}
