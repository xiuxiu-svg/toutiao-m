import request from '@/utils/request'
export const getSuggest = q => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
// 获取搜索结果的api
export const getResults = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search',
    params
  })
}
// 删除线上所有历史记录
export const delAllHistories = () => {
  return request({
    method: 'DELETE',
    url: '/app/v1_0/search/histories'
  })
}
