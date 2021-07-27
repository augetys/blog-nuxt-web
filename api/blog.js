import request from '~/utils/request'

export function getTags(data) {
  return request({
    url: '/blog/tag/findAll',
    method: 'post',
    data: data
  })
}

export function getArticles(data) {
  return request({
    url: '/blog/article/list',
    method: 'post',
    data: data
  })
}

export function getArticlesById(id) {
  return request({
    url: '/blog/article/' + id,
    method: 'get'
  })
}

