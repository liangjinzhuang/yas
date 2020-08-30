<template>
  <div class="title-tag">
    <div class="title-top">
      <div class="title-text">
        {{title}}
      </div>
      <div class="title-more">
        <router-link :to="{path:'list', query:query}">{{moreText}}</router-link>
      </div>
    </div>
    <div class="sub-title">
      {{desc}}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    moreText: {
      type: String,
      default: ''
    },
    query: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang='scss'>
.title-tag {
  padding: 15px 20px 15px 0px;
}
.title-top {
  display: flex;
  height: 33px;
  .title-text {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    line-height: 33px;
    flex: 1;
  }
  .title-more {
    font-size: 15px;
    color: #e82e21;
    font-weight: 600;
    line-height: 33px;
    padding-right: 15px;
    position: relative;
    &::before {
      width: 10px;
      height: 10px;
      position: absolute;
      right: 0;
      top: 10px;
      content: "";
      display: inline-block;
      border-right: 1px solid #e82e21;
      border-top: 1px solid #e82e21;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      transform: rotate(45deg);
    }
    a {
      color: #e82e21;
    }
  }
}
.sub-title {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(187, 187, 187);
}
</style>
