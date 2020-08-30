<template>
  <div class="notice-wrapper">
    <div class="notice">
      <van-icon name="volume-o" />
      <div class="notice-banner">
        <van-swipe vertical
                   :autoplay="3000"
                   :show-indicators="false">
          <van-swipe-item v-for="(item,index) in noticeList"
                          :key="index">{{item.content}}</van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noticeList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss'>
.notice {
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  margin: 15px 0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  padding: 0 15px;
  display: flex;
  align-items: center;
}
.notice .van-icon {
  color: red;
  font-size: 18px;
}
.notice-banner {
  height: 30px;
  flex: 1;
}
.notice-banner .van-swipe {
  width: 280px;
  height: 30px;
  padding-left: 15px;
  font-size: 12px;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
