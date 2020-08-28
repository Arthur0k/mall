<template>
  <div id="goodlist">
    <good-list-item v-for="(item, index) in goodlist" :key="index" :item="item">
    </good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  props: {
    goodlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  },
  created() {
    console.log(this.goodlist)
  }
}
</script>

<style scoped>
#goodlist {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
