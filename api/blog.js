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

export function getCommentByArticleId(data) {
  return request({
    url: '/comment/blogComment/commentsByArticleId',
    method: 'post',
    data:data
  })
}

export function search(data) {
  return request({
    url: '/blog/article/keyword',
    method: 'post',
    data:data
  })
}
