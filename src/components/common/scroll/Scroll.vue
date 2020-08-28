<template>
  <div id="Scroll" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default() {
        return 2
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    click: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bs: null
    }
  },
  methods: {
    scrollInit() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad: this.pullUpLoad
      })
      this.bs.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
      this.bs.on('scroll', position => {
        this.$emit('scroll', position)
      })
    },
    scrollTo(x, y, time) {
      this.bs && this.bs.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.bs && this.bs.finishPullUp()
    },
    refresh() {
      this.bs && this.bs.refresh()
      console.log('----')
    }
  },
  mounted() {
    this.scrollInit()
  }
}
</script>

<style scoped>
</style>
