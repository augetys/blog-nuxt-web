import request from '~/utils/request'

export function getTags(data) {
  return request({
    url: '/blog/blogTag/findAll',
    method: 'post',
    data: data
  })
}

