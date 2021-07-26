import request from '~/utils/request'

export function getTags(data) {
  return request({
    url: '/blog/tag/findAll',
    method: 'post',
    data: data
  })
}

