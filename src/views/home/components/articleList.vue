<template>
<div class="articleList-container">
<!-- 下拉刷新 -->
<van-pull-refresh
  v-model="isRefreshLoading"
  :success-text="succesText"
  :success-duration="1500"
  @refresh="onRefreshArticles"
>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  :succesText="succesText"
  @load="onLoad"
>
  <!-- <van-cell v-for="(article, index) in articles" :key="index" :title="article.title" /> -->
  <article-item
    v-for="(article, index) in articles"
    :key="index"
    :article="article"
  />
</van-list>
</van-pull-refresh>
</div>
</template>

<script>
import { getArticles } from '@/api/article'
import ArticleItem from '@/components/article-item'
export default {
  name: 'articleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  components: {
    ArticleItem
  },
  data () {
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: null,
      succesText: '',
      isRefreshLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    async onLoad () {
      // 异步更新数据
      // const res = await getArticles()
      // console.log(res)
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 0
      })
      // console.log(data)
      // this.articles = data.data.results
      const { results } = data.data
      this.articles.push(...results)
      this.isRefreshLoading = false
      if (results.length) {
        this.timestamp = data.data.pre_timestamp
      } else {
        this.finished = true
      }
    },
    async onRefreshArticles () {
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 1
        })
        const { results } = data.data
        this.articles.unshift(...results)
        this.isRefreshLoading = false
        this.succesText = '刷新成功'
      } catch (err) {
        this.succesText = '刷新失败'
      }
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.articleList-container {
  position: fixed;
  top: 90px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow-y: auto;
}
</style>
