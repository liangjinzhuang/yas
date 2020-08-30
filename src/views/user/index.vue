<template>
  <div class="user-wrapper">
    <div class="userinfo">
      <div class="avater">
        <van-image fit="cover"
                   round
                   :src="userInfo.avatar"
                   v-if="userInfo.avatar" />
      </div>
      <div class="nickname">
        {{userInfo.username}}
      </div>
    </div>
    <div class="list">

      <router-link :to="{path:'/myrelease'}"
                   class="list-item flex-row flex-y-center">
        <van-icon name="records" /><span class="flex-grow-1">我的发布</span>
        <van-icon class="triangle"
                  name="arrow" />
      </router-link>

      <router-link :to="{path:'/likes'}"
                   class="list-item flex-row flex-y-center">

        <van-icon name="like-o" /><span class="flex-grow-1">我的收藏</span>
        <van-icon class="triangle"
                  name="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import tabber from '@/components/tabber'
export default {
  name: 'user',
  data () {
    return {
      userInfo: {},
      avatar: ''
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$axios.user.userInfo().then(res => {
        console.log('userInfo=>', res.data)
        if (res.errorCode === 1) {
          this.userInfo = res.data
        } else {
          this.$toast({
            message: res.msg,
            onClose: () => { this.$router.push('/login') }
          })
        }
      }).catch(err => {
        console.log('err=>', err)
      })
    }
  },
  components: {
    tabber
  }
}
</script>

<style lang="scss" scope>
.user-wrapper {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
}
.userinfo {
  width: 100%;
  height: 150px;
  padding: 30px 0;
  box-shadow: 0px 16px 20px 0px rgba(83, 83, 83, 0.07);
  background: url(../../assets/images/my_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  .avater .van-image {
    width: 90px;
    height: 90px;
    display: block;
    margin: 0 auto;
  }
  .nickname {
    font-size: 20px;
    font-weight: 500;
    color: rgb(34, 34, 34);
    text-align: center;
    margin-top: 15px;
  }
}
.list {
  margin-top: 20px;
  .list-item {
    height: 50px;
    line-height: 50px;
    .van-icon {
      font-size: 25px;
      color: red;
    }
    span {
      font-size: 16px;
      padding: 0px 10px;
      color: rgb(51, 51, 51);
    }
    .triangle {
      font-size: 18px;
      color: #ccc;
    }
  }
}
</style>
