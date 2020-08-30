<template>
  <div>
    <v-header />
    <transition :name="transitionName"
                mode="out-in">
      <keep-alive :include="whiteList">
        <router-view class="appView"
                     :class="transitionName" />
      </keep-alive>
    </transition>
    <tabber v-if="tabbarShow" />
  </div>
</template>

<script>
import tabber from '@/components/tabber'
import header from '@/components/header'
export default {
  data () {
    return {
      title: '首页',
      transitionName: 'slide-right',
      whiteList: ['index', 'community', 'release', 'user']
    }
  },
  computed: {
    tabbarShow () {
      return this.$route.meta.tabShow
    }
  },
  watch: {
    $route (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else if (from.path === '/') {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = to.meta.index < from.meta.index ? 'slide-right' : 'slide-left'
      }
    }
  },
  components: {
    tabber,
    'v-header': header
  }
}
</script>

<style lang='scss' scoped>
.appView {
  position: absolute;
  width: 100%;
  z-index: 10;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
