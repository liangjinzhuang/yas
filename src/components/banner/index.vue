<template>
  <div class="banner-wrapper">
    <van-swipe :width="width"
               :height="height"
               :autoplay="autoplay"
               :loop="loop"
               :stop-propagation="stopPropagation">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <van-image fit="cover"
                   class="swipe-item-img"
                   lazy-load
                   :src="image.path || image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    // 轮播图设置默认参数
    height: {
      type: Number,
      default: 145
    },
    width: {
      type: String,
      default: '100%'
    },
    autoplay: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    },
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss' scoped>
.banner-wrapper >>> .swipe-item-img {
  width: 100%;
  height: 100%;
}
</style>
