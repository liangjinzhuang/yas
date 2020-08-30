<template>
  <div>
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <listItem :roterType="0"
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
  methods: {
    onLoad () {
      let params = {
        id: this.$route.query.id,
        start: this.start,
        pageSize: this.pageSize
      }
      this.$axios.likes.likesList(params).then(res => {
        console.log('list', res)
        if (res.errorCode === 1) {
          this.list = res.data
          if (res.data.length >= this.pageSize) {
            params.start = this.start++
            this.loading = false
          } else {
            this.loading = false
            this.finished = true
          }
        }
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
