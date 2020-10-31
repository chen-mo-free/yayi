import request from '@/utils/request'

export function addDoctors(data) {
  return request({
    url: '/addDoctors',
    method: 'get',
    params: {data}
  })
}

export function changeDoctor(did) {
  return request({
    url: '/changeDoctor',
    method: 'get',
    params: {did}
  })
}
export function updateDoctor(form) {
  return request({
    url: '/updateDoctor',
    method: 'put',
    params: {form}
  })
}
// export function uploadImage(data) {
//   return request({
//     url: '/uploadImage',
//     method: 'post',
//     params: {data}
//   })
// }