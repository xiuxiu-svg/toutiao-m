<template>
<div class="search-suggest">
<van-cell :title="suggest" v-for="(suggest, index) in suggestList" :key="index" />
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
  methods: {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>

</style>
