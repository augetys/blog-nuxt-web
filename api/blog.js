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

export function getArticlesByCategoryId(data) {
  return request({
    url: '/blog/article/list',
    method: 'post',
    data: data
  })
}

export function getArticlesByDate(data) {
  return request({
    url: '/blog/article/list',
    method: 'post',
    data: data
  })
}

export function getNav() {
  return request({
    url: '/blog/nav/findAll',
    method: 'get'
  })
}

export function getLoop() {
  return request({
    url: '/blog/loop/findAll',
    method: 'get'
  })
}

export function getHotArticle() {
  return request({
    url: '/blog/article/getHotArticle',
    method: 'get'
  })
}

