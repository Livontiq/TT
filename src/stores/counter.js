import { defineStore } from 'pinia'
import productData from '../data.json'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [...productData],
  }),

  getters: {
    totalQuantity: (state) => state.products.reduce((acc, product) => acc + product.count, 0),
    totalPrice: (state) =>
      state.products.reduce((acc, product) => acc + product.count * product.price, 0),
  },

  actions: {
    addProduct(product) {
      const existingProduct = this.products.find((p) => p.article === product.article)
      if (existingProduct) {
        existingProduct.count += product.count
      } else {
        this.products.push(product)
      }
    },
    updateProductCount(article, count) {
      const product = this.products.find((p) => p.article === article)
      if (product) {
        product.count = count
      }
    },
    removeProduct(article) {
      this.products = this.products.filter((p) => p.article !== article)
    },
    clearCart() {
      this.products = []
    },
  },
})
