import request from '~/utils/request'

export function getArticlesById(id) {
  return request({
    url: '/blog/article/' + id,
    method: 'get'
  })
}

export function getArticles(data) {
  return request({
    url: '/blog/article/list',
    method: 'post',
    data:data
  })
}
