<template>
<div class="my-container">
<van-cell-group>
  <van-cell>
    <van-image
      round
      width="50px"
      height="50px"
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <template #title>
      <span class="custom-title">单元格</span>
      <van-tag type="danger">标签</van-tag>
    </template>
  </van-cell>
</van-cell-group>
</div>
</template>

<script>
export default {
  name: 'My',
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

</style>
