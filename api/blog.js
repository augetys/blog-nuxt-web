import request from '~/utils/request'

export function getArticlesById(id) {
  return request({
    url: '/blog/article/' + id,
    method: 'get'
  })
}
export function getArticlesByCategory(data) {
  return request({
    url: '/blog/findByCategory',
    method: 'data'
  })
}
