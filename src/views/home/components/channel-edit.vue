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
    :class="{ active: index === active }"
  >
  <!-- @click="console.log(channel.id)" -->
  </van-grid-item>
</van-grid>
<div class="part">
  <van-cell :border="false">
    <div slot="title">推荐频道</div>
    <div slot="label">点击添加频道</div>
  </van-cell>
  <van-grid :gutter="10" class="recommed-fixed">
    <van-grid-item
    v-for="(recommedChannel, index) in recommedChannels"
    :key="index"
    :text="recommedChannel.name"
    @click="onAddUserChannels(recommedChannel)">
    </van-grid-item>
  </van-grid>
</div>
</div>
</template>

<script>
import {
  delCurrentChannelApi,
  getAllChannels,
  AddUserChannels
} from '@/api/channel'
export default {
  name: 'ChannelEdit',
  props: {
    userChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  components: {},
  data () {
    return {
      isEdit: false,
      allChannels: []
    }
  },
  computed: {
    recommedChannels () {
      // 我的频道userChannels/ 所有频道allChannels
      // 推荐频道用计算属性，首先遍历我的频道，遍历出来的
      // 每一项当作参数传入所有，过滤（filter）
      return this.allChannels.filter(channnel => {
        return !this.userChannels.find(userChannle => {
          return userChannle.id === channnel.id
        })
      })
    }
  },
  watch: {},
  created () {
    // 获取所有频道
    this.loadAllchannels()
  },
  methods: {
    async loadAllchannels () {
      const { data } = await getAllChannels()
      this.allChannels = data.data.channels
    },
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
      // 如果删除激活频道之前的，要改变删完之后的index
      if (index <= this.active) {
        this.$emit('updata-active', this.active - 1)
        console.log(this.active - 1)
      }
      this.userChannels.splice(index, 1)
      // 后台删除
      await delCurrentChannelApi(channel.id)
      // console.log(channel.id)
    },
    // 去往我的点击的频道
    toCurrentChannnel (index) {
      // 关闭弹层 得在父组件中关闭
      this.$emit('update-active', index)
      this.$emit('close')
    },
    // 批量修改（增加）用户频道
    async onAddUserChannels (Channel) {
      this.userChannels.push(Channel)
      const { data } = await AddUserChannels({
        channels: [
          {
            id: Channel.id,
            seq: this.userChannels.length
          }
        ]
      })
      console.log(data)
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>
.part {
  position: relative;
  .recommed-fixed {
    position: relative;
    height: 400px;
    overflow: auto;
  }
}
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
.active {
  /deep/ .van-grid-item__text {
    color: red;
  }
}
</style>
