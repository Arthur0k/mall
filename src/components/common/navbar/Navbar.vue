<template>
  <div class="navbar">
    <navbar-item>
      正文
    </navbar-item>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem'
export default {
  components: {
    NavbarItem
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  background-color: var(--color-tint);
  z-index: 99;
}
</style>
