import request from '~/utils/request'

export function commitComment(data) {
  return request({
    url: '/comment/blogComment/save',
    method: 'post',
    data: data
  })
}


export function commitReplay(data) {
  return request({
    url: '/comment/blogCommentReplay/save',
    method: 'post',
    data: data
  })
}
