<template>
  <div class="house-card">
    <div v-for="(item,index) in houseList"
         :key="index">
      <titleTag :title="item.name"
                :desc="item.desc"
                :moreText="moreText"
                :query="{id:item.cateid,title:item.name}" />

      <van-swipe :loop="false"
                 :show-indicators="false"
                 :width="250"
                 :height="230">
        <van-swipe-item v-for="(houseItem, idx) in item.list"
                        :key="idx"
                        @click="goRouter(houseItem.id)">
          <van-image fit="cover"
                     class="swipe-item-img"
                     :src="houseItem.imgs.length > 0?houseItem.imgs[0]:''" />
          <div class="house-card-bottom">
            <div class="house-card-title">{{houseItem.title}}</div>
            <div class="house-card-money">
              <span class="money-unit">$</span><span class="money">{{houseItem.price}}</span><span class="money-cycle">起/月</span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import titleTag from '@/components/titleTag'
export default {
  data () {
    return {
      title: '',
      desc: '',
      moreText: '显示更多',
      query: {}
    }
  },
  props: {
    houseList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  created () {
    console.log('houseList=>', this.houseList)
  },
  methods: {
    goRouter (houseId) {
      this.$router.push({ path: '/detail', query: { id: houseId } })
    }
  },
  components: {
    titleTag
  }
}
</script>

<style lang='scss' scoped>
.house-card {
  padding: 0px 0px 50px 20px;
}
.house-card .van-swipe {
  height: 230px;
}
.house-card .van-swipe-item {
  padding-right: 10px;
  .swipe-item-img {
    width: 100%;
    height: 160px;
    border-radius: 6px;
  }
}
.house-card-bottom {
  height: 60px;
  font-size: 0;
  .house-card-title {
    font-size: 15px;
    font-weight: 500;
    color: rgb(34, 34, 34);
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .house-card-money {
    .money-unit {
      font-size: 13px;
      font-weight: 400;
      color: #e82e21;
    }
    .money {
      font-size: 20px;
      font-weight: 600;
      color: #e82e21;
      margin: 0 3px;
    }
    .money-cycle {
      font-size: 13px;
      font-weight: 400;
      color: #e82e21;
    }
  }
  .house-banner .van-swipe-item:last-of-type {
    padding-right: 0;
  }
}
</style>
