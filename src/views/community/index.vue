<template>
  <div class="community-wrapper">
    <div class="community-banner">
      <banner :images="imgs" />
    </div>
    <notice :noticeList="noticeList" />
    <div class="community-tab">
      <div class="tabs-list">
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">
          <van-tabs v-model="active"
                    @change="tagChange">
            <van-tab class="van-tab "
                     v-for="(cate,index) in cateList"
                     :key="index"
                     :title="cate.name">
              <div class="tabitem">
                <tabItem :communityList="list" />
              </div>
            </van-tab>
          </van-tabs>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import tabber from '@/components/tabber'
import banner from '@/components/banner'
import notice from '@/components/notice'
import tabItem from '@/components/tabItem'
export default {
  name: 'community',
  data () {
    return {
      cateid: '',
      imgs: [],
      noticeList: [],
      active: 0,
      cateList: [],
      communityList: [],
      allList: [],
      loading: false,
      finished: false,
      start: 1,
      pageSize: 8
    }
  },
  computed: {
    list () {
      let allList = this.allList
      let communityList = []
      if (this.cateid) {
        communityList = allList.filter(item => item.cateid === this.cateid)
      } else {
        communityList = allList
      }
      return communityList
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getBanner()
      this.getNotice()
      this.getCateList()
    },
    getBanner () {
      this.$axios.banner.bannerList().then(res => {
        this.imgs = res.banner
      })
    },
    getNotice () {
      this.$axios.community.noticeList().then(res => {
        this.noticeList = res.natice
      })
    },
    getCateList () {
      this.$axios.community.cateList().then(res => {
        let cateList = res.data
        cateList.unshift({ catid: '', name: '全部' })
        this.cateList = cateList
      })
    },
    onLoad () {
      let params = {
        start: this.start,
        pageSize: this.pageSize
      }
      this.$axios.community.communityList(params).then(res => {
        if (res.errorCode === 1) {
          this.allList = this.allList.concat(res.data)
          if (res.data.length >= this.pageSize) {
            params.start = this.start++
            this.loading = false
          } else {
            this.loading = false
            this.finished = true
          }
        }
      })
    },
    tagChange (index) {
      this.cateid = this.cateList[index].cateid
    }
  },
  components: {
    tabber,
    banner,
    notice,
    tabItem
  }
}
</script>

<style lang="scss" scoped>
.community-wrapper {
  padding: 0 20px 50px 20px;
  box-sizing: border-box;
}
.community-banner {
  margin-top: 20px;
}
.van-tabs >>> .van-tab {
  justify-content: left;
  flex: none;
  margin-right: 10px;
}
.van-tabs >>> .van-tabs__nav--line {
  padding-bottom: 10px;
}
.tabitem {
  width: 100%;
}
</style>
