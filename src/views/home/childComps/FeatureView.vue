<template>
  <div class="feature">
    <div class="feature-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.feature {
  display: flex;
  /* justify-content: center;
  align-items: center; */
}
.feature-item {
  flex: 1;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
}
.feature-item img {
  width: 75%;
  vertical-align: middle;
  margin-bottom: 5px;
}
</style>
