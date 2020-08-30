<template>
  <div>
    <div class="header_tips flex-row flex-y-center">
      <h2 class="block-title flex-grow-1">用户登录</h2>
      <van-button type="info"
                  size="mini"
                  to="/register">去注册</van-button>
    </div>

    <van-form @submit="onSubmit">
      <van-field v-model="username"
                 name="username"
                 label="用户名"
                 placeholder="用户名"
                 :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password"
                 type="password"
                 name="password"
                 label="密码"
                 placeholder="密码"
                 :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      this.$axios.login.login(values).then(res => {
        console.log('res=>', res)
        if (res.errorCode === 1) {
          this.$toast({
            message: res.msg,
            onClose: () => { this.$router.push('/') }
          })
        } else {
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.log('err=>', err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header_tips {
  background-color: #f7f8fa;
  padding: 16px 16px 16px;
}
.block-title {
  margin: 0;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>
