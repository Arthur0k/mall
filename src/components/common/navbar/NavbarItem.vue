<template>
  <div class="navbar-item">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <!-- <slot name="center"></slot> -->
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar-item {
  display: flex;
}
.left,
.right {
  width: 60px;
  height: 40px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>
