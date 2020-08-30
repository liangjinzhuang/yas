<template>
  <div>
    <search />
    <div class="banner20-padding">
      <banner :images="imgs" />
    </div>
    <houseCard :houseList="houseList" />
  </div>
</template>

<script>
import search from '@/components/search'
import banner from '@/components/banner'
import tabber from '@/components/tabber'
import houseCard from '@/components/houseCard'

export default {
  name: 'index',
  data () {
    return {
      imgs: [],
      houseList: []
    }
  },
  created () {
    this.getBanner()
    this.getHouse()
  },
  methods: {
    getBanner () {
      this.$axios.banner.bannerList().then(res => {
        console.log('bannerRes=>', res)
        if (res.errorCode === 1) {
          this.imgs = res.banner
        } else {
          this.$toast({
            message: res.msg,
            onClose: () => { this.$router.push('/login') }
          })
        }
      }).catch(error => {
        console.log('bannerError=>', error)
      })
    },
    getHouse () {
      this.$axios.house.houseList().then(res => {
        console.log('res=>', res)
        this.houseList = res.house
      }).catch(error => {
        console.log('houseListError=>', error)
      })
    }
  },
  components: {
    search,
    banner,
    tabber,
    houseCard
  }
}
</script>

<style lang='scss' scoped>
.banner20-padding {
  padding: 0 20px;
}
</style>
