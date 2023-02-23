import request from '@/api/request'

/**
 * 素材上传
 * @param {*} data
 * @returns
 */
export const uploadFileOssSave = (data) => {
  return request({
    method: 'POST',
    url: '/lejuAdmin/material/uploadFileOssSave',
    data
  })
}
