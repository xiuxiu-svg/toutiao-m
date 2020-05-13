<template>
<div class="home-container">
  <!-- 导航栏 -->
<van-cell value="内容" class="nav-top">
  <template #default>
    <div class="logo"></div>
    <van-button type="default" round class="search-btn" icon="search">搜索</van-button>
  </template>
</van-cell>
<!-- /导航栏 -->

<!-- 滑动切换 -->
<van-tabs v-model="active" swipeable>
  <van-tab v-for="channel in channels" :key="channel.id" :title="channel.name">

    <article-list :channel="channel"/>
  </van-tab>
</van-tabs>
<!-- /滑动切换 -->
</div>
</template>

<script>
import { getchannels } from '@/api/user'
import articleList from './components/articleList'

export default {
  name: 'Home',
  props: {},
  components: {
    articleList
  },
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  methods: {
    async loadChannels () {
      const { data: { data } } = await getchannels()
      this.channels = data.channels
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.home-container {
  .van-cell {
    background-color: #3196fa;
    .van-cell__value {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .logo {
      width: 95px;
      background: url(./logo.png) no-repeat;
      background-size: cover;
    }
    .search-btn {
      background-color: rgba(250, 240, 240, 0.3);
      color: #fff;
      width: 147px;
      height: 26px;
      border: unset;
    }
  }
}

</style>
