<script>
import CartItem from './CartItem.vue'
import { useCartStore } from '../../stores/counter'

export default {
  components: {
    CartItem,
  },

  setup() {
    const cartStore = useCartStore()

    const formatNum = (num) => new Intl.NumberFormat('ru-RU').format(num)

    const handlePayment = () => {
      const paymentData = {
        totalQuantity: cartStore.totalQuantity,
        totalPrice: cartStore.totalPrice,
        products: cartStore.products.map((product) => ({
          title: product.title,
          count: product.count,
          price: product.price,
          total: product.count * product.price,
        })),
      }

      console.log(JSON.stringify(paymentData, null, 2))
    }

    return {
      cartStore,
      formatNum,
      handlePayment,
    }
  },
}
</script>

<template>
  <div class="cart">
    <div class="cart-container">
      <div class="cart-elements">
        <div class="cart-elements__desc">
          <div class="cart-elements__desc__title">
            <div class="cart-elements__desc__title_bold">Ваша корзина</div>
            <div class="cart-elements__desc__title_subtitle">
              {{ formatNum(cartStore.totalQuantity) }} товара
            </div>
          </div>
          <div class="cart-elements__desc_clear">
            <button class="cart-elements__desc_clear_btn" @click="cartStore.clearCart">
              Очистить корзину
            </button>
          </div>
        </div>
        <div class="cart-elements__order">
          <div class="cart-elements__order_item">
            <CartItem />
          </div>
          <div class="cart-elements__order__payment">
            <div class="cart-elements__order__payment__header">
              <div class="cart-elements__order__payment_title">Итого</div>
              <div class="cart-elements__order__payment__info">
                <div class="cart-elements__order__payment__info__sum">
                  <div class="cart-elements__order__payment__info__sum_title">Сумма заказа</div>
                  <div class="cart-elements__order__payment__info__sum_subtitle">
                    {{ formatNum(cartStore.totalPrice) }} ₽
                  </div>
                </div>
                <div class="cart-elements__order__payment__info__count">
                  <div class="cart-elements__order__payment__info__count_title">Количество</div>
                  <div class="cart-elements__order__payment__info__title_subtitle">
                    {{ formatNum(cartStore.totalQuantity) }} шт
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-elements__order__payment__footer">
              <div class="cart-elements__order__payment__total">
                <div class="cart-elements__order__payment__total_title">Стоимость товаров</div>
                <div class="cart-elements__order__payment__total_subtitle">
                  {{ formatNum(cartStore.totalPrice) }} ₽
                </div>
              </div>
              <div class="cart-elements__order__payment__button">
                <button
                  class="cart-elements__order__payment__button_btn"
                  :disabled="cartStore.products.length === 0"
                  @click="handlePayment"
                >
                  Оплатить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cart-container {
  margin-top: 80px;
}
.cart-elements {
  display: grid;
}
.cart-elements__desc {
  width: 800px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.cart-elements__desc__title {
  display: flex;
  gap: 20px;
  align-items: baseline;
}
.cart-elements__desc__title_bold {
  font-weight: 700;
  font-size: 44px;
}
.cart-elements__desc__title_subtitle {
  font-weight: 400;
  font-size: 18px;
  color: #797b86;
}
.cart-elements__desc_clear_btn {
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  color: #797b86;
  background-color: transparent;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}
.cart-elements__desc_clear_btn:hover {
  color: #0069b4;
}
.cart-elements__order {
  display: flex;
  margin-top: 40px;
  gap: 20px;
}
.cart-elements__order_item {
  display: grid;
  flex-grow: 1;
}
.cart-elements__order__payment {
  display: grid;
  align-content: space-between;
  width: 100%;
  max-width: 425px;
  max-height: 405px;
  border-radius: 5px;
  padding: 40px 30px;
  background-color: #f6f8fa;
}
.cart-elements__order__payment_title {
  font-weight: 400;
  font-size: 30px;
}
.cart-elements__order__payment__info {
  display: grid;
  gap: 30px;
  margin-top: 40px;
  font-weight: 400;
  font-size: 20px;
}
.cart-elements__order__payment__info__sum {
  display: flex;
  justify-content: space-between;
}
.cart-elements__order__payment__info__count {
  display: flex;
  justify-content: space-between;
}
.cart-elements__order__payment__total {
  margin-top: 80px;
  border-top: 1px solid #aeb0b6;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 25px;
  padding-top: 20px;
}
.cart-elements__order__payment__total_subtitle {
  font-weight: 700;
  font-size: 30px;
}
.cart-elements__order__payment__button {
  margin-top: 30px;
}
.cart-elements__order__payment__button_btn {
  width: 100%;
  height: 54px;
  border: none;
  background-color: #0069b4;
  border-radius: 4px;
  font-weight: 400px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
}
.cart-elements__order__payment__button_btn:hover {
  transform: scale(0.98);
}
.cart-elements__order__payment__button_btn:disabled {
  background-color: grey;
  cursor: not-allowed;
}
.cart-elements__order__payment__button_btn:disabled:hover {
  transform: none;
}
</style>
