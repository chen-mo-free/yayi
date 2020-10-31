import request from '@/utils/request'

export function goodsList(params) {
  return request({
    url: '/goodsList',
    method: 'get',
    params
  })
}
export function deleteGoods(pid) {
  return request({
    url: '/deleteGoods',
    method: 'delete',
    params:{pid}
  })
}
