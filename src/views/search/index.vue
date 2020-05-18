<template>
<div class="search-container">
<form action="/">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索关键词"
    background="#3296fa"
    @search="onSearch"
    @cancel="$router.back()"
  />
</form>
<!-- 搜索结果 -->
<results v-if="isShow" :results="results"/>
<!-- /搜索结果 -->
<!-- 查询建议 -->
<suggest
  v-else-if="searchText"
  :search-text="searchText"
  @search="onSearch"
/>
<!-- /查询建议 -->
<!-- 历史记录 -->
<history v-else :searchHistories="searchHistories"/>
<!-- /历史记录 -->
</div>
</template>

<script>
import history from './components/history'
import results from './components/results'
import suggest from './components/suggest'
import { getResults } from '@/api/search'
import { setItem } from '@/utils/storage'
export default {
  name: 'SearchIndex',
  props: {},
  components: {
    history,
    results,
    suggest
  },
  data () {
    return {
      searchText: '',
      isShow: false,
      results: [],
      searchHistories: []
    }
  },
  computed: {},
  watch: {
    // 当搜索关键词发生改变，显示查询组件
    searchText () {
      this.isShow = false
    }
  },
  created () {},
  methods: {
    async onSearch (val) {
      this.isShow = true
      this.searchHistories.unshift(this.searchText)
      setItem('localSearch', this.searchHistories)
      const { data } = await getResults({
        q: this.searchText
      })
      console.log(data)
      this.results = data.data.results
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.van-search__action {
  color: #fff;
}
</style>
