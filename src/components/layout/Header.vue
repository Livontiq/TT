<script>
import { useCartStore } from '../../stores/counter'

export default {
  setup() {
    const cartStore = useCartStore()

    const formatNum = (num) => new Intl.NumberFormat('ru-RU').format(num)
    return {
      cartStore,
      formatNum,
    }
  },
}
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-items">
        <div class="header-items__search">
          <input class="header-items__search_input" type="text" placeholder="Поиск" />
          <button class="header-items__search_btn">
            <img src="../../assets/img/Glass.svg" alt="glass" />
          </button>
        </div>
        <div class="header-items__cart">
          <div class="header-items__cart_icon">
            <img src="../../assets/img/Cart.svg" alt="cart" />
          </div>
          <div class="header-items__cart__desc">
            <div class="header-items__cart__desc_titlecart">Ваша корзина</div>
            <div class="header-items__cart__desc_titlecount">
              {{ formatNum(cartStore.totalQuantity) }} товара
            </div>
            <div class="header-items__cart__desc_titlesum">
              {{ formatNum(cartStore.totalPrice) }} ₽
            </div>
          </div>
        </div>
      </div>
      <div class="header-items__directory">
        <div class="header-items__directory_nonactive">Главная</div>
        <div class="header-items__directory_element">
          <img src="../../assets/img/Arrow.svg" alt="arrow" />
        </div>
        <div class="header-items__directory_active">Корзина</div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  height: 141px;
}
.header-container {
  height: 95px;
  padding-top: 45px;
  display: grid;
}
.header-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.header-items__search {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  height: 40px;
  padding: 10px 30px 10px 18px;
  background-color: rgba(121, 123, 134, 0.25);
  border-radius: 4px;
}
.header-items__search_input {
  flex-grow: 1;
  font-size: 14px;
  height: 21px;
  background-color: transparent;
  color: #1f2432;
  border: none;
  outline: none;
}
.header-items__search_input::placeholder {
  color: #1f2432;
}
.header-items__search_btn {
  background-color: transparent;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}
.header-items__search_btn:hover {
  transform: scale(1.3);
}
.header-items__cart {
  display: flex;
  align-items: center;
  width: 132px;
  height: 51px;
  gap: 10px;
}
.header-items__cart__desc {
  display: grid;
  gap: 3px;
}
.header-items__cart__desc_titlecart {
  font-weight: 400;
  font-size: 14px;
}
.header-items__cart__desc_titlecount {
  font-weight: 400;
  font-size: 12px;
  color: #797b86;
}
.header-items__cart__desc_titlesum {
  font-weight: 400;
  font-size: 12px;
}
.header-items__directory {
  display: flex;
  gap: 10px;
  margin-top: 30px;
  align-items: center;
}
.header-items__directory_nonactive {
  font-weight: 400;
  font-size: 14px;
}
.header-items__directory_active {
  font-weight: 400;
  font-size: 14px;
  color: #797b86;
}
</style>
