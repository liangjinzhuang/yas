<template>
  <div class="detail-wrapper">
    <div class="detail-banner">
      <banner :images="detail.imgs"
              :height="250" />
      <div class="share flex-row">
        <div class="share-icon"
             @click="likesBtn">
          <van-icon name="star"
                    :class="likes === 1?'active':''" />
        </div>
        <div class="share-icon">
          <van-icon name="share" />
        </div>
      </div>
    </div>

    <div class="house-intro">
      <div class="house-name">
        {{detail.title}}
      </div>
      <div class="house-card-money">
        <span class="money-unit">$</span><span class="money">{{detail.price}}</span><span class="money-cycle">起/月</span>
      </div>
      <div class="list-tag">
        <span class="tag"
              v-for="(item,index) in detail.tags"
              :key="index">{{item}}</span>
      </div>
    </div>
    <div class="house-detail-intro">
      <div class="house-detail-title">房源介绍</div>
      <div class="detai-text"
           v-html="detail.value">
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner'
export default {
  data () {
    return {
      detail: {},
      likes: 0
    }
  },
  created () {
    console.log('this.$route')
    this.getDetail()
  },
  methods: {
    getDetail () {
      let id = this.$route.query.id
      this.$axios.house.houseDetail(id).then(res => {
        if (res.errorCode === 1) {
          this.detail = res.data
          this.likes = res.data.likes
          this.$store.commit('setPageTitle', res.data.title)
        }
      })
    },
    likesBtn () {
      let id = this.$route.query.id
      if (this.likes === 1) {
        this.$axios.likes.removeLikes(id).then(res => {
          console.log('likes=>', res)
          if (res.errorCode === 1) {
            this.likes = 0
          }
        })
      } else {
        this.$axios.likes.likesAdd(id).then(res => {
          console.log('likes=>', res)
          if (res.errorCode === 1) {
            this.likes = 1
          }
        })
      }
    }
  },
  components: {
    banner
  }
}
</script>

<style lang='scss' scoped>
.detail-banner {
  position: relative;
}
.share {
  position: absolute;
  top: 10px;
  right: 10px;
  .share-icon {
    background: #cccccc;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: table;
    margin-right: 10px;
  }
  .van-icon {
    font-size: 18px;
    color: #fff;
    display: table-cell;
    vertical-align: middle;
  }
  .van-icon.active {
    color: #e82e21;
  }
}
.house-intro {
  margin: 30px 20px 0 20px;
  padding-bottom: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
}
.house-card-money {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px 0 20px 0;
  .money-unit {
    font-size: 14px;
    font-weight: 400;
    color: #e82e21;
    margin-bottom: 4px;
  }
  .money {
    font-size: 12rpx;
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
.list-tag .tag {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 10px;
  padding: 1px 3px;
  margin-bottom: 4px;
  border-radius: 4px;
}
.house-detail-intro {
  padding: 30px 20px;
}
.house-detail-title {
  font-size: 20px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  line-height: 28px;
}
.detai-text {
  font-size: 12px;
  margin-top: 20px;
}
</style>
