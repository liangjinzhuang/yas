<template>
  <div>
    <van-nav-bar :title="title"
                 :left-arrow="navbarShow"
                 fixed
                 :z-index="11"
                 :placeholder="true"
                 @click-left="back"
                 @click-right="home">
      <template #right
                v-if="show">
        <van-icon name="wap-home-o"
                  size="22" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      if (this.show) {
        this.$router.go(-1)
      }
    },
    home () {
      if (this.show) {
        this.$router.push('/')
      }
    },
    setPageTitle () {
      this.title = this.$store.getters.getPageTitle
    }
  },
  computed: {
    navbarShow () {
      return !this.$route.meta.tabShow
    },
    title () {
      let title = this.$store.state.pageTitle ? this.$store.state.pageTitle : this.$route.meta.title
      return title
    },
    show () {
      return !this.$route.meta.tabShow
    }
  },
  mounted () {
    // this.setPageTitle()
  }
  /*   watch: {
      '$store.state.pageTitle': function () { // 监听vuex中userName变化而改变header里面的值
        this.title = this.$store.state.pageTitle
      }
    } */
}
</script>

<style lang='scss'>
</style>
