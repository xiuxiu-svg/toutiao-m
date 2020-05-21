import request from '@/utils/request'
// 封装文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
// 封装单个文章详情
export const getArticle = artId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${artId}`
  })
}
