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
  <van-cell :title="article.title" :border="false"/>
  <van-cell>
    <div slot="icon">
      <van-image width="50" height="50" round :src="article.aut_photo" />
    </div>
    <div slot="title">{{ article.aut_name }}</div>
    <div slot="label">{{ article.pubdate }}</div>
    <van-button type="default">取消关注</van-button>
  </van-cell>
  <van-cell>
    <p>{{ article.content }}</p>
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
import { getArticle } from '@/api/article'
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
    return {
      article: {}
    }
  },
  computed: {},
  watch: {},
  created () {
    // 直接发送请求会报404错误，原因是文章ID超出了math.max,
    // 解决办法是用json-bigint跟axios自定义的处理后端返回数据的api:transformResponse
    // 如果还报404错误可能是真的文章不存在
    this.loadArticle()
  },
  methods: {
    async loadArticle () {
      // 提示加载中
      this.$toast.loading({
        message: '加载中...',
        duration: 0,
        forbidClick: true
      })
      try {
        const { data } = await getArticle(this.artId)
        this.article = data.data
        this.$toast.success('成功文案')
      } catch (err) {
        this.$toast.fail('失败文案')
      }
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.nav-title {
  background-color: #3196fa;
  /deep/ .van-icon {
    color: #fff;
  }
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
</style>
