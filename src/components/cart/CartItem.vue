<script>
import { useCartStore } from '../../stores/counter'

export default {
  setup() {
    const cartStore = useCartStore()

    const plusCount = (product) => {
      cartStore.updateProductCount(product.article, product.count + 1)
    }

    const minCount = (product) => {
      if (product.count > 1) {
        cartStore.updateProductCount(product.article, product.count - 1)
      } else {
        cartStore.removeProduct(product.article)
      }
    }

    const removeProduct = (product) => {
      cartStore.removeProduct(product.article)
    }

    const formatNum = (num) => new Intl.NumberFormat('ru-RU').format(num)

    return {
      cartStore,
      minCount,
      plusCount,
      removeProduct,
      formatNum,
    }
  },
}
</script>

<template>
  <div class="cart-item">
    <div v-if="cartStore.products.length === 0" class="item-empty">Корзина пуста</div>
    <div v-for="product in cartStore.products" :key="product.article" class="item">
      <div class="item-container">
        <div class="item-img">
          <img class="item-img_src" :src="product.pic" alt="img" />
        </div>
        <div class="item-desc">
          <div class="item-desc_title">{{ product.title }}</div>
          <div class="item-desc_subtitle">{{ product.description }}</div>
          <div class="item-desc_article">Артикул: {{ product.article }}</div>
        </div>
        <div class="item-count">
          <div class="item-count__elements">
            <button class="item-count__elements_btnmin" @click="minCount(product)">-</button>
            <span class="item-count__elements_inpt">{{ formatNum(product.count) }}</span>
            <button class="item-count__elements_btnplus" @click="plusCount(product)">+</button>
          </div>
          <transition name="item-count__fade">
            <div v-if="product.count > 1" class="item-count__fade_invisible">
              {{ formatNum(product.price) }} ₽/шт.
            </div>
          </transition>
        </div>
        <div class="item-sum">{{ formatNum(product.count * product.price) }} ₽</div>
        <div class="item-delete">
          <button class="item-delete_btn" @click="removeProduct(product)">
            <img src="../../assets/img/Delete.svg" alt="delete" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.item {
  width: 100%;
  max-width: 800px;
  height: 121px;
  border-bottom: 1px solid #aeb0b6;
  margin-bottom: 20px;
}
.item-empty {
  font-size: 30px;
  color: #797b86;
}
.item-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-img {
  width: 100px;
  height: 100px;
}
.item-img_src {
  width: 100px;
}
.item-desc {
  width: 293px;
  height: 107px;
  display: grid;
}
.item-desc_title {
  font-weight: 400;
  font-size: 16px;
}
.item-desc_subtitle {
  font-weight: 400;
  font-size: 12px;
}
.item-desc_article {
  font-weight: 400;
  font-size: 14px;
  color: #797b86;
}
.item-count {
  display: grid;
  justify-items: center;
}
.item-count__elements {
  display: flex;
  justify-content: space-between;
  width: 104px;
  height: 34px;
  font-weight: 400;
  font-size: 14px;
}
.item-count__elements_btnmin {
  width: 34px;
  height: 34px;
  background-color: #f6f8fa;
  border: none;
  border-radius: 10px 0 0 10px;
  transition: all 0.2s;
  cursor: pointer;
}
.item-count__elements_btnmin:hover {
  background-color: #1f2432;
  color: #f6f8fa;
}
.item-count__elements_inpt {
  width: 34px;
  height: 34px;
  border: none;
  background-color: #f6f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-count__elements_btnplus {
  width: 34px;
  height: 34px;
  background-color: #f6f8fa;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.2s;
  cursor: pointer;
}
.item-count__elements_btnplus:hover {
  background-color: #1f2432;
  color: #f6f8fa;
}
.item-count__fade_invisible {
  margin-top: 10px;
}
.item-sum {
  width: 90px;
}
.item-delete {
  margin-bottom: 90px;
}
.item-delete_btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.item-delete_btn:hover {
  transform: scale(1.2);
}
</style>
