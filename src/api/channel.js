import request from '@/utils/request'
// 删除指定用户频道
export const delCurrentChannelApi = channelId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/channels/${channelId}`
  })
}
