<template>
<div class="search-history">
<van-cell title="历史记录">
  <div slot="default">
    <div>
      <span>全部删除</span>
      &nbsp;&nbsp;
      <span>完成</span>
    </div>
    <!-- <van-icon name="delete" /> -->
  </div>
</van-cell>
<van-cell
  v-for="(history, index) in searchHistories"
  :key="index"
>
  <div slot="title">{{ history }}</div>
</van-cell>
</div>
</template>

<script>
// import { getItem } from '@/utils/storage'
export default {
  name: 'history',
  props: {
    searchHistories: {
      type: Array,
      required: true
    }
  },
  components: {},
  data () {
    return {
      histories: []
    }
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
