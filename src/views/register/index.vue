<template>
  <div>
    <div class="header_tips flex-row flex-y-center">
      <h2 class="block-title flex-grow-1">用户注册</h2>
      <van-button type="info"
                  size="mini"
                  to="/login">去登录</van-button>
    </div>

    <van-form @submit="onSubmit">
      <van-uploader :after-read="afterRead"
                    v-model="fileList" />
      <van-field v-model="username"
                 name="username"
                 label="用户名"
                 placeholder="用户名"
                 :rules="[{ validator, message: '用户名最少为6位！' }]" />
      <van-field v-model="password"
                 type="password"
                 name="password"
                 label="密码"
                 placeholder="密码"
                 :rules="[{ validator, message: '密码最少为6位！' }]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">
          注册
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
      password: '',
      fileList: [],
      imgs: []
    }
  },
  methods: {
    validator (val) {
      return /\d{6}/.test(val)
    },
    onSubmit (values) {
      let formData = new FormData()
      // 下面是将各种数据上传到fromData中
      formData.append('username', values.username)
      formData.append('password', values.password)
      for (let i = 0; i < this.imgs.length; i++) {
        formData.append('img' + i, this.imgs[i])
      }
      console.log('formData=>', formData)
      this.$axios.register.register(formData).then(res => {
        console.log('register=>', res)
        if (res.errorCode === 1) {
          this.$toast({
            message: res.msg,
            onClose: () => {
              this.login(values)
            }
          })
        } else {
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.log('err=>', err)
      })
    },
    afterRead (value) {
      // 此时可以自行将文件上传至服务器
      console.log('value=>', value)
      if (Array.isArray(value)) {
        value.forEach(item => {
          this.imgs.push(item.file)
        })
      } else {
        this.imgs.push(value.file)
      }
    },
    login (params) {
      this.$axios.login.login(params).then(res => {
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
.van-uploader {
  width: 87px;
  height: 87px;
  margin: 10px auto;
  display: block;
}
</style>
