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
<div class="article-wrap content">
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
    <p v-html="article.content" class="markdown-body" ref="image-content"></p>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      正文结束
    </van-divider>
  </van-cell>
  <!-- 评论区 -->
  <van-cell title="全部评论" value="已展示所有评论"/>
</div>
<!-- 发表评论 -->
<div class="bottom">发布评论</div>
</div>
</template>

<script>
import './github-markdown.css'
import { getArticle } from '@/api/article'
// 预览图片先加载后调用方法
import { ImagePreview } from 'vant'
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
        // Vue提供一个方法，在数据修改后马上操作被数据修改的视图需要放到$nexTick
        this.$nextTick(() => {
          this.handlePreviewImage()
        })
        this.$toast.success('成功文案')
        // ImagePreview([
        //   'https://img.yzcdn.cn/vant/apple-1.jpg',
        //   'https://img.yzcdn.cn/vant/apple-2.jpg'
        // ])
      } catch (err) {
        this.$toast.fail('失败文案')
      }
    },
    handlePreviewImage () {
      // 1 内容容器
      // 2 得到所有Image标签
      // 3 循环image给image注册点击事件
      // 4 在事件处理函数中调用imagePreview
      const contentWrap = this.$refs['image-content']
      const images = contentWrap.querySelectorAll('img')
      const imgPath = []
      images.forEach((img, index) => {
        imgPath.push(img.src)
        img.onclick = function (e) {
          // e.stopPropagation()
          // e.preventdefault()
          console.log(1)
          ImagePreview(imgPath)
          return false// 三种阻止冒泡跟默认行为最有效的。
        }
      })
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.content {
  position: fixed;
  top: 39px;
  bottom: 38px;
  left: 0;
  right: 0;
  overflow: auto;
}
.markdown-body {
  padding: 14px;
  background-color: #fff;
}
.nav-title {
  background-color: #3196fa;
  /deep/ .van-icon {
    color: #fff;
  }
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
