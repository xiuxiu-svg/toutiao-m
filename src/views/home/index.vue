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
<van-tabs v-model="active" swipeable class="channel-tabs">
  <van-tab v-for="channel in channels" :key="channel.id" :title="channel.name">

    <article-list :channel="channel"/>
  </van-tab>
  <div class="zhanwei" slot="nav-right"></div>
  <!-- 汉堡按钮 -->
  <div slot="nav-right"
  @click="isChannelEditShow=true"
  class="showPopup"
  >
    <van-icon name="wap-nav" color="#1989fa" />
  </div>
</van-tabs>
<!-- /滑动切换 -->
<!-- 弹出层 -->
<van-popup
  class="channel-edit-popup"
  v-model="isChannelEditShow"
  position="bottom"
  closeable
  round
  close-icon-position="top-left"
  get-container="body"
  :style="{ height: '100%' }"
>
<channel-edit />
</van-popup>
</div>
</template>

<script>
import { getchannels } from '@/api/user'
import articleList from './components/articleList'
import ChannelEdit from './components/channel-edit'

export default {
  name: 'Home',
  props: {},
  components: {
    articleList,
    ChannelEdit
  },
  data () {
    return {
      active: 0,
      channels: [],
      isChannelEditShow: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  methods: {
    showPopup () {
      this.show = true
    },
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
  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
  }
  .zhanwei {
    width: 33px;
    flex-shrink: 0;
    // height: 18px;
  }
  .showPopup {
    border-right: 1px solid #ccc;
    position: fixed;
    font-size: 22px;
    top: 58px;
    right: 0;
    background-color: rgba(255, 255,255, .5);
  }
}
// .channel-edit-popup {
//   height: 100%;
// }

</style>
