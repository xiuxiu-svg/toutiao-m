<template>
<div class="login">
<van-nav-bar
  title="登录/注册"
  left-arrow
  @click-left="$router.back()"
/>

<van-form @submit="onLogin" :show-error="false" :show-error-message="false" @failed="onFailed" validate-first>
  <van-field
    v-model="user.mobile"
    label="文本"
    icon-prefix="iconfont"
    left-icon="iconshouji"
    placeholder="请输入手机号"
    :rules="rules.mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    label="文本"
    icon-prefix="iconfont"
    left-icon="icondianzan"
    placeholder="请输入验证码"
    :rules="rules.code"
  >
    <template #button>
      <van-button size="small" class="send-btn">发送验证码</van-button>
    </template>
</van-field>
  <div class="onLogin">
  <van-button type="info" block>登录</van-button>
</div>
</van-form>
</div>
</template>

<script>
import { login } from '@/api/user'
// 需要另外加载
import { Toast } from 'vant'
export default {
  name: 'Login',
  props: {},
  components: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      rules: {
        mobile: [
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3,5,7,8]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /\d{6}/, message: '验证码错误' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onFailed (errInfo) {
      // console.log(errInfo)
      const errMessage = errInfo.errors[0].message
      Toast({
        message: errMessage,
        position: 'top'
      })
      // Toast.position = 'top'
    },
    async onLogin () {
      Toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login({
          mobile: this.user.mobile,
          code: this.user.code
        })
        console.log(res)
        Toast.success('登录成功')
      } catch {
        Toast.fail('登录失败')
      }
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.van-nav-bar {
  background-color: #1989fa;
    // .van-icon {
    //   color: #f2f3f5 !important;
    // } 不管用
    // .van-icon {
    //   color: #f2f3f5;
    // }
    /deep/ .van-icon {
      color: #f2f3f5;
    }
}
.van-field__button {
  .send-btn {
    background-color: #ccc;
    border-radius: 15px;
    .van-button__text {
      color: #fff;
    }
  }
}
.onLogin {
  padding: 16px 26px;
  .van-button {
    // background-color: rgb(22, 87, 87);
    border: none;
    font-size: 11px;
  }
}
</style>
