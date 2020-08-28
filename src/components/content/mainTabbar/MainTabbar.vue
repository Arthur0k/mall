<template>
  <div class="main-tabbar">
    <tabbar>
      <tabbar-item path="/home">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="tabbar-item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="tabbar-item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/cart.svg" alt />
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/cart_active.svg" alt />
        <div slot="tabbar-item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="tabbar-item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="tabbar-item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
</style>
