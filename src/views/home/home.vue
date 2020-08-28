<template>
  <div id="home">
    <navbar></navbar>
    <tab-control ref="tabControl2" :list="['流行', '新款', '精选']" @tabClick="tabClick" class="tabFixed" v-show="isFixed"></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      :click="true"
      :pullUpLoad="true"
      @scroll="contentPosition"
      @pullingUp="loadMore"
    >
      <home-swiper @imgLoad="swiperImgLoad" :banners="banners" ref="hSwiper"></home-swiper>
      <feature-view :recommends="recommends"></feature-view>
      <home-recommend></home-recommend>
      <tab-control ref="tabControl" :list="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
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
import { deBounce } from 'components/common/utils'

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
      isShow: 0,
      isFixed: false,
      tabControlOffsetTop: 0,
      scrollY: 0
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
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    loadMore() {
      this.getHomeData(this.type)
    },
    contentPosition(pos) {
      // backtop的显示与隐藏
      this.isShow = -pos.y >= 1000
      // tabcontrol的显示隐藏
      this.isFixed = -pos.y >= this.tabControlOffsetTop
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    swiperImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
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
    this.$bus.$on('imgLoaded', deBounce(this.$refs.scroll.refresh, 200))
  },
  activated: function () {
    this.$refs.hSwiper.startTimer()
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated: function () {
    this.$refs.hSwiper.stopTimer()
    this.scrollY = this.$refs.scroll.getScrollY()
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
.tabFixed {
  position: relative;
}
</style>
