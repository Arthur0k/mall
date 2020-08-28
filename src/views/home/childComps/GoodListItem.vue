<template>
  <div id="good-list-item">
    <a :href="item.link">
      <img class="goodlist-img" :src="item.show.img" @load="imgLoad" />
      <div class="title">{{item.title}}</div>
      <span class="price">¥{{item.price}}</span>
      <img class="icon" src="~assets/img/common/collect.svg" alt />
      <span class="collect">{{item.cfav}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoaded')
    }
  }
}
</script>

<style scoped>
#good-list-item {
  text-align: center;
  width: 170px;
  margin-bottom: 10px;
}
#good-list-item .goodlist-img {
  width: 100%;
}
.title {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon {
  width: 16px;
  height: 16px;
  margin: 0 2px 0px 5px;
  vertical-align: top;
}
.price,
.collect {
  color: red;
}
</style>
