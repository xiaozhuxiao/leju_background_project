import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'post',
    data
  })
}
