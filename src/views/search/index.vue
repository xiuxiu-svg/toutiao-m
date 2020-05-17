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
<results v-if="isShow" />
<!-- /搜索结果 -->
<!-- 查询建议 -->
<suggest
  v-else-if="searchText"
  :search-text="searchText"
/>
<!-- /查询建议 -->
<!-- 历史记录 -->
<history v-else />
<!-- /历史记录 -->
</div>
</template>

<script>
import history from './components/history'
import results from './components/results'
import suggest from './components/suggest'
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
      isShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onSearch (val) {
      console.log(val)
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
