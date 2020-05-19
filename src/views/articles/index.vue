<template>
<div class="article-container">
<!-- 顶部导航 -->
<van-nav-bar
  class="nav-title"
  title="文章详情"
  left-arrow
  @click-left="$router.back()"
/>
<!-- 文章标题-作者信息-文章内容 -->
<div class="article-wrap">
  <van-cell title="单元格" :border="false"/>
  <van-cell>
    <div slot="icon">
      <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div slot="title">11111</div>
    <div slot="label">1111</div>
    <van-button type="default">取消关注</van-button>
  </van-cell>
  <van-cell>
    <p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      正文结束
    </van-divider>
  </van-cell>
  <!-- 评论区 -->
  <van-cell title="全部评论" value="已展示所有评论"/>
  <!-- 发表评论 -->
  <div>发布评论</div>
</div>
</div>
</template>

<script>
export default {
  name: 'articles',
  props: {
    artId: {
      type: [Number, String],
      required: true
    }
  },
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
.nav-title {
  background-color: #3196fa;
}
</style>
