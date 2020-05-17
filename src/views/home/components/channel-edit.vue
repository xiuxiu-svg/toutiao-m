<template>
<div class="channel-edit">
<van-nav-bar
  title="编辑频道"
/>
<van-cell :border="false">
  <div slot="title">我的频道</div>
  <div slot="label">点击进入频道</div>
  <van-button
    round
    plain
    type="primary"
    size="mini"
    @click="isEdit=!isEdit">
    {{isEdit? "完成": "编辑"}}
  </van-button>
</van-cell>
<van-grid :gutter="10">
  <van-grid-item
    v-for="(channel, index) in userChannels"
    :key="index"
    :text="channel.name"
    :icon="isEdit? 'close': ''"
    @click="onClickItemFn(channel, index)"
  >
  <!-- @click="console.log(channel.id)" -->
  </van-grid-item>
</van-grid>
<van-cell :border="false">
  <div slot="title">我的频道</div>
  <div slot="label">点击添加频道</div>
</van-cell>
<van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" text="文字">

  </van-grid-item>
</van-grid>
</div>
</template>

<script>
import { delCurrentChannelApi } from '@/api/channel'
export default {
  name: 'ChannelEdit',
  props: {
    userChannels: {
      type: Array,
      required: true
    }
  },
  components: {},
  data () {
    return {
      isEdit: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onClickItemFn (channel, index) {
      // 点击频道有两种逻辑，编辑状态下删除，完成状态下跳转至频道
      if (this.isEdit) {
        this.delCurrentChannel(channel, index)
      } else {
        this.toCurrentChannnel(index)
      }
    },
    // 删除我的频道
    async delCurrentChannel (channel, index) {
      // 登陆状态下
      // 视图删除
      this.userChannels.splice(index, 1)
      // 后台删除
      await delCurrentChannelApi(channel.id)
      // console.log(channel.id)
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
/deep/ .van-grid-item__content {
  padding: 0;
  background-color: #f4f5f6;
  height: 40px;
  .van-grid-item__text {
    margin-top: 0;
  }
  .van-grid-item__icon {
    font-size: 20px
  }
  .van-icon {
    position: absolute;
    top: -8px;
    left: 65px;
  }
}
</style>
