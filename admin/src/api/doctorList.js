import request from '@/utils/request'

export function doctorList(params) {
  return request({
    url: '/doctorList',
    method: 'get',
    params
  })
}
export function deleteDoctor(did) {
  return request({
    url: '/deleteDoctor',
    method: 'delete',
    params:{did}
  })
}
