import request from '@/utils/request'
// 获取文章分类
export const artGetChannelService = () => request.get('/my/cate/list')
// 添加文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)
// 编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)
// 删除文章分类
export const artDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })
// 获取文章
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })
// 发布文章
export const artPublishService = (data) => request.post('/my/article/add', data)
export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })
// 文章编辑
export const artEditService = (data) => request.put('my/article/info', data)
// 删除文章
export const artDelServie = (id) =>
  request.delete('my/article/info', { params: { id } })
