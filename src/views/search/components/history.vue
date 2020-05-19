<template>
<div class="search-history">
<van-cell title="历史记录">
  <div slot="default">
    <van-icon name="delete" v-if="isShowdelHistory" @click="change"/>
    <div v-else>
      <span @click="delAll">全部删除</span>
      &nbsp;&nbsp;
      <span @click="isShowdelHistory = !isShowdelHistory">完成</span>
    </div>
  </div>
</van-cell>
<van-cell
  v-for="(history, index) in searchHistories"
  :key="index"
  @click="delHistory(history, index)"
>
  <div slot="title">{{ history }}</div>
  <van-icon
    name="close"
    v-show="!isShowdelHistory"
  ></van-icon>
</van-cell>
</div>
</template>

<script>
import { delAllHistories } from '@/api/search'
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
      histories: [],
      isShowdelHistory: true
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    change () {
      this.isShowdelHistory = false
    },
    async delAll () {
      console.log(1)
      await delAllHistories()
      this.$emit('update-history', [])
    },
    delHistory (history, index) {
      if (!this.isShowdelHistory) {
        this.searchHistories.splice(index, 1)
        return
      }
      this.$emit('search', 'history')
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>

</style>
