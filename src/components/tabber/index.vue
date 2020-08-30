<template>
  <div class="tabbar-wrapper">
    <van-tabbar v-model="active" :z-index="100">
      <van-tabbar-item v-for="(item,index) in tabbarRoutes"
                       :key="index"
                       :icon="item.meta.icon"
                       :to="item.path">{{item.meta.title}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    tabbarRoutes () {
      return this.getTabbarRoute()
    }
  },
  created () {
  },
  mounted () {
    this.activeRouter()
  },
  watch: {
    '$route': 'activeRouter'
  },
  methods: {
    getTabbarRoute () {
      let routes = []
      routes = this.$router.options.routes.filter(item => item.path === '/')[0].children
      routes = routes.filter(item => item.meta.tabShow)
      return routes
    },
    activeRouter () {
      this.getTabbarRoute().forEach((item, index) => {
        if (item.path === this.$route.path) {
          this.active = index
        }
      })
    }
  }
}
</script>

<style>
</style>
