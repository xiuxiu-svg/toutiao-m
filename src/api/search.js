import request from '@/utils/request'
export const getSuggest = q => {
  return request({
    method: '/app/v1_0/suggestion',
    url: 'GET',
    q
  })
}
