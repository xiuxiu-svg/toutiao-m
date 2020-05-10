<template>
<div class="login">
<van-nav-bar
  title="登录/注册"
  left-arrow
  @click-left="$router.back()"
/>

<van-form
  @submit="onLogin"
  :show-error="false"
  :show-error-message="false"
  @failed="onFailed"
  validate-first
  ref="loginForm">
  <van-field
    v-model="user.mobile"
    name="mobile"
    icon-prefix="icon"
    left-icon="shouji"
    placeholder="请输入手机号"
    :rules="rules.mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    icon-prefix="icon"
    left-icon="yanzhengma"
    placeholder="请输入验证码"
    :rules="rules.code"
  >
    <template #button>
      <!-- if-else结构 -->
      <van-count-down millisecond :time="1000 * 5" format="ss s" v-if="isCountDown" @finish="isCountDown = false"/>
      <van-button size="small" class="send-btn" @click.prevent="onSendMsg" v-else :loading="isSendmsgLoding">发送验证码</van-button>
    </template>
</van-field>
  <div class="onLogin">
  <van-button type="info" block>登录</van-button>
</div>
</van-form>
</div>
</template>

<script>
import { login, sendSms } from '@/api/user'
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
      },
      isCountDown: false,
      isSendmsgLoding: false
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
        const { data } = await login(this.user)
        console.log(data)
        Toast.success('登录成功')
        this.$store.commit('userToken', data.data)
      } catch {
        Toast.fail('登录失败')
      }
    },
    // 请求发送验证
    async onSendMsg () {
      this.isSendmsgLoding = true
      let message = ''
      // 校验手机号->
      try {
        await this.$refs.loginForm.validate('mobile')
        const res = await sendSms(this.user.mobile)
        console.log(res)
        // 隐藏按钮进入倒计时
        this.isCountDown = true
      } catch (err) {
        console.log(err)
        // if (err.message === '手机号格式错误') {
        if (err.name === 'mobile') {
          message = err.message
          // Toast({
          //   message: err.message,
          //   position: 'top'
          // })
        } else if (err.response.status === 429) {
          message = err.response.data.message
          // Toast({
          //   message: err.response.data.message,
          //   position: 'top'
          // })
        } else {
          message = '未知错误'
        }
      }
      Toast({
        message,
        position: 'top'
      })
      this.isSendmsgLoding = false
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
