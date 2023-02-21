import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'post',
    data
  })
}
