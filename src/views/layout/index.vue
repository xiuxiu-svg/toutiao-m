<template>
<div class="layout-container">
<!-- 子路由出口 -->
<router-view />
<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="search" to="/question">问答</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o" to="/vedio">视频</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o" to="/my">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  name: 'Layout',
  props: {},
  components: {},
  data () {
    return {
      active: 'home'
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>

</style>
