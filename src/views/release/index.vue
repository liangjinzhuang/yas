<template>
  <div class="release-wrapper">
    <h2 class="block-title">社区房源信息</h2>
    <van-form @submit="updataCommunity">
      <van-field v-model="formData.title"
                 name="title"
                 label="标题"
                 left-icon="label-o"
                 placeholder="输入标题"
                 :rules="[{ required: true, message: '请填写标题' }]" />
      <van-field v-model="formData.desc"
                 name="desc"
                 label="描述"
                 left-icon="label-o"
                 placeholder="输入描述"
                 :rules="[{ required: true, message: '请填写描述' }]" />
      <van-field v-model="formData.price"
                 name="price"
                 label="价格"
                 type="Number"
                 left-icon="gold-coin-o"
                 placeholder="输入价格"
                 :rules="[{ required: true, message: '请填写价格' }]" />
      <van-field v-model="formData.content"
                 name="value"
                 rows="2"
                 autosize
                 label="内容"
                 left-icon="notes-o"
                 type="textarea"
                 placeholder="请输入内容" />

      <van-field readonly
                 clickable
                 name="picker"
                 :value="formData.value"
                 label="选择分类"
                 placeholder="点击选择分类"
                 @click="formData.showPicker = true" />
      <van-popup v-model="formData.showPicker"
                 position="bottom">
        <van-picker show-toolbar
                    :columns="formData.cateList"
                    value-key="name"
                    @confirm="onConfirm"
                    @cancel="formData.showPicker = false" />
      </van-popup>
      <h2 class="block-title">上传图片</h2>
      <div class="uploader">
        <van-uploader v-model="formData.fileList"
                      multiple
                      :after-read="afterRead" />
        <van-button block
                    type="info"
                    native-type="submit">点击上传</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import tabber from '@/components/tabber'
export default {
  name: 'release',
  data () {
    return {
      formData: {}
    }
  },
  created () {
    this.reset()
    this.getCateList()
  },
  methods: {
    validator (val) {
      return /\d{6}/.test(val)
    },
    updataCommunity (values) {
      let formData = new FormData()
      formData.append('title', values.title)
      formData.append('desc', values.desc)
      formData.append('price', values.price)
      formData.append('value', values.value)
      formData.append('cateid', this.formData.cateid)
      for (let i = 0; i < this.formData.imgs.length; i++) {
        formData.append('img' + i, this.formData.imgs[i])
      }
      if (!this.formData.cateid) {
        this.$toast({
          message: '请选择分类！'
        })
        return false
      }
      this.$axios.community.communityAdd(formData).then(res => {
        if (res.errorCode === 1) {
          this.$toast({
            message: res.msg,
            onClose: () => {
              this.reset()
            }
          })
        } else {
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.log('err=>', err)
      })
    },
    onConfirm (value) {
      this.formData.value = value.name
      this.formData.cateid = value.cateid
      this.formData.showPicker = false
    },
    afterRead (fileValue) {
      // 此时可以自行将文件上传至服务器
      console.log('value=>', fileValue)
      if (Array.isArray(fileValue)) {
        fileValue.forEach(item => {
          this.formData.imgs.push(item.file)
        })
      } else {
        this.formData.imgs.push(fileValue.file)
      }
    },
    getCateList () {
      this.$axios.community.cateList().then(res => {
        this.formData.cateList = res.data
      })
    },
    reset () {
      this.formData = {
        title: '',
        desc: '',
        price: '',
        content: '',
        fileList: [],
        imgs: [],
        value: '',
        showPicker: false,
        cateList: [],
        cateid: ''
      }
    }
  },
  components: {
    tabber
  }
}
</script>
<style lang="scss" scoped>
.release-wrapper {
  width: 100%;
  background-color: #f7f8fa;
  padding-bottom: 50px;
}
.block-title {
  margin: 0;
  padding: 16px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.uploader {
  padding: 30px;
}
.uploader >>> .van-uploader__upload {
  background: #fff;
  margin-bottom: 20px;
}
</style>
