import request from '@/api/request.js'

export const findArticles = (start, limit, data) => {
  return request({
    method: 'POST',
    url: `'/lejuAdmin/productArticle/findArticles/${start}/${limit}'`,
    data
  })
}
