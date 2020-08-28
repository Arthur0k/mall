<template>
  <div class="tab-control" >
    <div class="tab-control-item" v-for="(item, index) of list" :key="index" @click="tabClick(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 99;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 6px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
