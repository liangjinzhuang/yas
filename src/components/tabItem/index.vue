<template>
  <div>
    <div class="tab-item"
         v-for="(item,index) in communityList"
         :key="index"
         @click="goRouter(item.id)">
      <div class="tab-item-header flex-row flex-y-center">
        <img class="avatar"
             :src="item.avatar" />
        <span class="name flex-grow-1">{{item.username}}</span>
        <div class="house-card-money">
          <span class="money-unit">$</span><span class="money">{{item.price}}</span><span class="money-cycle">起/月</span>
        </div>
      </div>
      <div class="tab-item-title">
        <span class="title">{{item.title}}</span>
        <span class="desc"
              :class=" textWrap?'text-wrap':'' ">{{item.desc}}</span>
      </div>
      <div class="tab-imgs-list"
           v-if="item.imgs.length > 0">
        <van-image fit="cover"
                   v-for="(img,idx)  in item.imgs"
                   :key="idx"
                   :src="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    textWrap: {
      type: Boolean,
      default: true
    },
    communityList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goRouter (id) {
      this.$router.push({ path: '/housedetail', query: { id: id } })
    }
  }

}
</script>

<style lang='scss' scoped>
.tab-item {
  padding: 15px 10px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: 15px 0 25px 0;
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
  .tab-imgs-list {
    display: flex;
    flex-wrap: wrap;
    .van-image {
      width: 98px;
      height: 98px;
      padding-right: 4px;
      margin-bottom: 4px;
    }
    .van-image:nth-of-type(n + 3) {
      padding-right: 0px;
    }
  }
}
</style>
