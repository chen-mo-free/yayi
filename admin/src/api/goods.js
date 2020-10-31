import request from '@/utils/request'

export function addGoods(data) {
  return request({
    url: '/addGoods',
    method: 'post',
    params: {data}
  })
}

export function uploadImage(data) {
  return request({
    url: '/uploadImage',
    method: 'post',
    params: {data}
  })
}

export function getDoctorInfo() {
  return request({
    url: '/getDoctorInfo',
    method: 'get'
  })
}