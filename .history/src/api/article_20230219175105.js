import request from '@/api/article.js'

exoprt const findArticles =(data) =>{
  return request({
    method:'POST',
    url:'/lejuAdmin/productArticle/findArticles/{start}/{limit}',
    data
  })
}