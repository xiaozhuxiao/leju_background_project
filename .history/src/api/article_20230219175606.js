import request from '@/api/request.js'

export const findArticles = (data) => {
  return request({
    method: 'POST',
    url: '/lejuAdmin/productArticle/findArticles/{start}/{limit}',
    data
  })
}
