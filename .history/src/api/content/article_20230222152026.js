import request from '@/api/request'

/**
 * 查找文章列表
 * @param {*} start 开始页
 * @param {*} limit 每页几条数据
 * @param {*} data 传递的参数 {title:'',author:''}
 * @returns
 */
export const findArticles = (start, limit, data) => {
  return request({
    method: 'POST',
    url: `/lejuAdmin/productArticle/findArticles/${start}/${limit}`,
    data
  })
}

/**
 * 改变文章显示状态
 * @param {*} data {isShow:0/1,id:''}
 * @returns
 */
export const changeShowStatus = (data) => {
  return request({
    method: 'POST',
    url: '/lejuAdmin/productArticle/changeShowStatus',
    data
  })
}

/**
 * 文章删除
 * @param {*} data
 * @returns
 */
export const delArticle = (id) => {
  return request({
    method: 'DELETE',
    url: `/lejuAdmin/productArticle/del/${id}`
  })
}

/**
 * 添加文章
 * @param {*} data
 * @returns
 */

export const addArticle = (data) => {
  return request({
    method: 'POST',
    url: '/lejuAdmin/productArticle/addArticle',
    data
  })
}
