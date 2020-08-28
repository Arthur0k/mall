import request from './request'

function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
export { getHomeMultiData, getHomeData }
