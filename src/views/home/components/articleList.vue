<template>
<div class="articleList-container">
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="(article, index) in articles" :key="index" :title="article.title" />
</van-list>
</div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'articleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  components: {},
  data () {
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: null
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
        with_top: 1
      })
      console.log(data)
      // this.articles = data.data.results
      const { results } = data.data
      this.articles.push(...results)
      this.loading = false
      if (results.length) {
        this.timestamp = data.data.pre_timestamp
      } else {
        // this.finished = true
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
