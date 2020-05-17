<template>
<div class="channel-edit">
<van-nav-bar
  title="编辑频道"
/>
<van-cell :border="false">
  <div slot="title">我的频道</div>
  <div slot="label">点击进入频道</div>
  <van-button round plain type="primary" size="mini">编辑</van-button>
</van-cell>
<van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" text="文字" />
</van-grid>
<van-cell :border="false">
  <div slot="title">我的频道</div>
  <div slot="label">点击添加频道</div>
</van-cell>
<van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" text="文字" />
</van-grid>
</div>
</template>

<script>
export default {
  name: 'ChannelEdit',
  props: {},
  components: {},
  data () {
    return {}
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
/deep/ .van-grid-item__content {
  background-color: #f4f5f6;
}
</style>
