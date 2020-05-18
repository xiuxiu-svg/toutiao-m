<template>
<div class="search-suggest">
<van-cell v-for="(suggest, index) in suggestList" :key="index" icon="search">
  <!-- <div slot="tittle">111</div> -->
  <template #title>
    <span v-html="highlight(suggest)"></span>
  </template>
</van-cell>
</div>
</template>

<script>
import { getSuggest } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'suggest',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
      suggestList: []
    }
  },
  computed: {},
  watch: {
    // 完整写法 监听数据变化，从一开始。
    searchText: {
      // debounce按需加载后，防抖时间1秒，注意语法格式
      handler: debounce(async function () {
        const { data } = await getSuggest(this.searchText)
        console.log(data)
        this.suggestList = data.data.options
      }, 1000),
      immediate: true
    }
  },
  created () {},
  methods: {
    highlight (suggest) {
      return suggest.replace(
        // 一般正则表达式不满足用构造函数的方法，g全局，i忽略大小写
        new RegExp(this.searchText, 'gi'),
        `<span style="color: red">${this.searchText}</span>`
      )
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>

</style>
