<template>
<div class="article-container">
<van-nav-bar
  title="文章详情"
  left-arrow
  @click-left="$router.back()"
/>
</div>
</template>

<script>
export default {
  name: 'article',
  props: {
    articleId: {
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

</style>
