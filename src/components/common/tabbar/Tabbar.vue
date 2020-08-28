<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  z-index: 99;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  background-color: #fff;
}
</style>
