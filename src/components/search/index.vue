<template>
  <div class="search-wrapper">
    <van-search v-model="value"
                @search="onSearch"
                placeholder="请输入搜索关键词" />
  </div>
</template>

<script >
export default {
  name: 'search',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      console.log(val)
      this.$router.push({ path: '/searchlist', query: { keyword: val } })
    }
  }
}
</script>

<style lang="scss" scope>
.search-wrapper {
  padding: 10px 20px;
  .van-search {
    padding: 0;
  }
}
</style>
