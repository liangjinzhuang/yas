<template>
  <div class="house-detail-wrapper">
    <div class="detail-main">
      <div class="detail-banner">
        <banner :images="detail.imgs"
                :height="250" />
      </div>
      <div class="tabitem">
        <div class="tab-item">
          <div class="tab-item-header flex-row flex-y-center">
            <img class="avatar"
                 :src="detail.avatar" />
            <span class="name flex-grow-1">{{detail.username}}</span>
            <div class="house-card-money">
              <span class="money-unit">$</span><span class="money">{{detail.price}}</span><span class="money-cycle">起/月</span>
            </div>
          </div>
          <div class="tab-item-title">
            <span class="title">{{detail.title}}</span>
            <span class="desc textWrap">{{detail.desc}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner'
import tabItem from '@/components/tabItem'
export default {
  data () {
    return {
      detail: ''
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      let id = this.$route.query.id
      this.$axios.community.communityDetail(id).then(res => {
        if (res.errorCode === 1) {
          this.detail = res.data
          this.$store.commit('setPageTitle', res.data.title)
        }
      })
    }
  },
  components: {
    banner,
    tabItem
  }
}
</script>

<style lang='scss' scoped>
.detail-banner {
  border-bottom: 1px solid #f5f5f5;
}
.tab-item {
  padding: 15px 10px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  .avatar {
    width: 44px;
    height: 44px;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #f5f5f5;
  }
  .name {
    display: block;
    max-width: 180px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .house-card-money {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    .money-unit {
      font-size: 14px;
      font-weight: 400;
      color: #e82e21;
      margin-bottom: 4px;
    }
    .money {
      font-size: 24px;
      font-weight: 600;
      color: #e82e21;
      margin: 0 3px;
    }
    .money-cycle {
      font-size: 12px;
      font-weight: 400;
      color: #e82e21;
      margin-bottom: 4px;
    }
  }
  .tab-item-title {
    padding: 10px 0;
    .title {
      font-size: 14px;
      color: #333;
      font-weight: bold;
      display: block;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc {
      font-size: 12px;
      color: #666;
      display: block;
    }
    .text-wrap {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 15px;
    }
  }
}
</style>
