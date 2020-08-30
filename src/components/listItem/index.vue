<template>
  <div>
    <div class="list-item-wrapper flex-row"
         v-for="(item,index) in list"
         :key="index"
         @click="goRouter(item.id)">
      <van-image class="van-image"
                 lazy-load
                 fit="cover"
                 :src="item.imgs[0]" />
      <div class="list-item-info flex-col">
        <div class="name">{{item.title}}</div>
        <div class="tags flex-row">
          <span class="tag"
                v-for="(tag,idx) in item.tags"
                :key="idx">{{tag}}</span>
        </div>
        <div class="house-card-money">
          <span class="money-unit">$</span><span class="money">{{item.price}}</span><span class="money-cycle">起/月</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roterType: {
      type: Number,
      dafault: 1
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    goRouter (id) {
      let path = '/detail'
      if (this.roterType === 1) {
        path = 'housedetail'
      } else if (this.roterType === 1) {
        path = ''
      }

      this.$router.push({ path: path, query: { id: id } })
    }
  }
}
</script>

<style lang='scss' scoped>
.list-item-wrapper {
  padding: 20px;
}
.list-item-wrapper .van-image {
  height: 90px;
  width: 120px;
  border-radius: 5px;
}
.list-item-info {
  justify-content: space-between;
  margin-left: 10px;
  .name {
    font-size: 18px;
    font-weight: 500;
    color: #222222;
    word-wrap: none;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
.tags {
  flex-wrap: wrap;
  height: 17px;
  overflow: hidden;
  justify-content: start;
  .tag {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    height: 17px;
    margin-right: 10px;
    padding: 0 2px 0 2px;
    border-radius: 2px;
    color: #ffcc8d;
  }
}
.house-card-money {
  .money-unit {
    font-size: 12px;
    font-weight: 400;
    color: rgb(255, 82, 61);
  }
  .money {
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 82, 61);
    margin: 0 3px;
  }
  .money-cycle {
    font-size: 12px;
    font-weight: 400;
    color: rgb(255, 82, 61);
  }
}
</style>
