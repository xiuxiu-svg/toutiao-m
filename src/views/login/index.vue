<template>
<div class="login">
<van-nav-bar
  title="登录/注册"
  left-arrow
  @click-left="onClickLeft"
/>

<van-cell-group>
  <van-field
    v-model="mobile"
    label="文本"
    icon-prefix="iconfont"
    left-icon="icondianzan"
    placeholder="请输入手机号"
  />
  <van-field
    v-model="code"
    clearable
    label="文本"
    icon-prefix="iconfont"
    left-icon="icondianzan"
    placeholder="请输入验证码"
  >
    <template #button>
      <van-button size="small" class="send-btn">发送验证码</van-button>
    </template>
</van-field>
</van-cell-group>
<div class="onLogin">
  <van-button type="info" block @click="onLogin">登录</van-button>
</div>
</div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  props: {},
  components: {},
  data () {
    return {
      mobile: '13911111111',
      code: '246810'
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onClickLeft () {

    },
    async onLogin () {
      const res = await login({
        mobile: this.mobile,
        code: this.code
      })
      console.log(res)
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
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
  }
}
</style>
