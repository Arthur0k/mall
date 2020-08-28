<template>
  <div class="tabbar-item" @click="navTo">
    <slot name="tabbar-item-active-icon" v-if="isActive"></slot>
    <slot name="tabbar-item-icon" v-else></slot>
    <div :class="{active: isActive}">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['path'],
  data() {
    return {
      clickId: ''
    }
  },
  methods: {
    navTo() {
      this.$router.push(this.path).catch(e => e)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item img {
  width: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  vertical-align: middle;
}

.active {
  color: var(--color-high-text);
}
</style>
