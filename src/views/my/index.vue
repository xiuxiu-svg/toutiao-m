<template>
<div class="my-container">
<van-cell-group class="my-info" v-if="user">
  <!-- 第一行 -->
  <van-cell center :border="false" class="base-info">
    <van-image
      class="avatar"
      slot="icon"
      round
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div slot="title">昵称</div>
    <van-button type="info" round class="update-btn">修改资料</van-button>
  </van-cell>
<!-- 第二行-->
<van-grid :border="false">
  <van-grid-item>
    <div slot="text" class="text-wrap">
      <div class="count">123</div>
      <div class="text">头条</div>
    </div>
  </van-grid-item>
  <van-grid-item>
    <div slot="text" class="text-wrap">
      <div class="count">123</div>
      <div class="text">关注</div>
    </div>
  </van-grid-item>
  <van-grid-item>
    <div slot="text" class="text-wrap">
      <div class="count">123</div>
      <div class="text">粉丝</div>
    </div>
  </van-grid-item>
  <van-grid-item>
    <div slot="text" class="text-wrap">
      <div class="count">123</div>
      <div class="text">获赞</div>
    </div>
  </van-grid-item>

</van-grid>
</van-cell-group>
<div class="not-login" v-else @click="$router.push('/login')">
  <img src="https://img.yzcdn.cn/vant/cat.jpeg" class="mobile">
  <div class="login">点击登录</div>
</div>
<!-- 第三行 -->
<van-grid :column-num="2" class="nav-grid mb-4">
  <van-grid-item icon-prefix="icon" icon="shoucang" text="收藏" class="nav-grid-item" />
  <van-grid-item icon-prefix="icon" icon="lishi" text="历史" class="nav-grid-item" />
</van-grid>
<!-- 第四行 -->
<van-cell title="消息通知" is-link />
<van-cell title="小智同学" is-link class="mb-4" />
<van-cell title="退出登录" class="logout" v-if="user" @click="onLogout"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
// import { Dialog } from 'vant'
// Vue.use(Dialog)

export default {
  name: 'My',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {},
  methods: {
    onLogout () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          // on confirm
          this.$store.commit('userToken', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
/deep/ .my-info {
  background: url(./banner.png) no-repeat;
  background-size: cover;
  .base-info {
    background-color: unset;
    height: 115px;
    box-sizing: border-box;
    padding-top: 38px;
    padding-bottom: 11px;
    .van-cell__title {
      color: #fff;
      margin-left: 20px;
      font-size: 14px;
    }
    .avatar {
      box-sizing: border-box;
      width: 66px;
      height: 66px;
      border: 1px solid #fff;
      margin-right: 11px;
    }
    .update-btn {
      height: 16px;
      color: #666;
      font-size: 10px;
    }
  }
  .van-grid-item__content {
    background-color: unset;
    font-size: 14px;
    color: #fff;
    height: 65px;
    .text-wrap {
      text-align: center;
      .count {
      font-size: 18px;
      }
      .text {
        font-size: 11px;
      }
    }
  }
}
.nav-grid {
  .nav-grid-item{
    height: 70px;
    .toutiao {
      font-size: 22px;
    }
  }
}
.logout {
  text-align: center;
  color: #d86262;
}
.mb-4 {
  margin-bottom: 4px;
}
.not-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(./banner.png) no-repeat;
  background-size: cover;
  height: 180px;
  .mobile {
    width: 66px;
    height: 66px;
    margin-bottom: 10px;
  }
  .login {
    font-size: 14px;
    color: #fff;
  }
}

</style>
