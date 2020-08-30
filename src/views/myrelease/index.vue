<template>
  <div>
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <listItem :roterType="1"
                :list="list" />
    </van-list>

  </div>
</template>
<script>
import listItem from '@/components/listItem'
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      start: 1,
      pageSize: 8
    }
  },
  created () { },
  methods: {
    onLoad () {
      let params = {
        start: this.start,
        pageSize: this.pageSize
      }
      this.$axios.user.userCommunity(params).then(res => {
        if (res.errorCode === 1) {
          this.list = this.list.concat(res.data)
          if (res.data.length >= this.pageSize) {
            params.start = this.start++
            this.loading = false
          } else {
            this.loading = false
            this.finished = true
          }
        }
      }).catch(err => {
        console.log('err=>', err)
      })
    }
  },
  components: {
    listItem
  }
}
</script>

<style lang='scss' scoped>
</style>
