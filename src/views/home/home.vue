<template>
  <div id="home">
    <navbar></navbar>
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      :click="true"
      :pullUpLoad="true"
      @scroll="contentPosition"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
      <feature-view :recommends="recommends"></feature-view>
      <home-recommend></home-recommend>
      <tab-control :list="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <good-list :goodlist="goodlist[type].list"></good-list>
    </scroll>
    <back-top @click.native="backtop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import BackTop from 'components/content/backTop/BackTop'

import homeSwiper from './childComps/homeSwiper'
import FeatureView from './childComps/FeatureView'
import homeRecommend from './childComps/homeRecommend'
import GoodList from './childComps/GoodList'

import { getHomeMultiData, getHomeData } from 'network/home'

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goodlist: {
        pop: { page: 1, list: [] },
        sell: { page: 1, list: [] },
        new: { page: 1, list: [] }
      },
      type: 'pop',
      isShow: 0
    }
  },
  components: {
    Navbar,
    Scroll,
    BackTop,
    TabControl,
    homeSwiper,
    FeatureView,
    homeRecommend,
    GoodList
  },
  methods: {
    /**
     * 业务相关
     */
    deBounce(fn, delay) {
      let timeout
      return function (...args) {
        const context = this
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.type = 'pop'
          break
        case 1:
          this.type = 'new'
          break
        case 2:
          this.type = 'sell'
          break
      }
    },
    loadMore() {
      this.getHomeData(this.type)
    },
    contentPosition(pos) {
      this.isShow = -pos.y > 1000
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    /**
     * 网络请求相关
     */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        const {
          data: {
            data: { banner, recommend }
          }
        } = res
        this.banners = banner.list
        this.recommends = recommend.list
      })
    },
    getHomeData(type) {
      const page = this.goodlist[type].page
      getHomeData(type, page).then(res => {
        const { list } = res.data.data
        this.goodlist[type].list.push(...list)
        this.goodlist[type].page = page + 1
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  created() {
    // 1 多种数据请求
    this.getHomeMultiData()

    // 2 商品初始请求
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted() {
    // bus监听图片加载完
    this.$bus.$on('imgLoaded', this.deBounce(this.$refs.scroll.refresh, 100))
  },
  activated: function () {
    this.$refs.hSwiper.startTimer()
  },
  deactivated: function () {
    this.$refs.hSwiper.stopTimer()
  }
}
</script>

<style scoped>
#home {
  padding-top: 40px;
}
.wrapper {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 50px;
}
</style>
