/**
 * article模块接口
 */
import axios from '@/utils/http' // 导入http中创建的axios实例
import base from './base' // 导入接口域名列表

const house = {
  // 房源列表
  houseList () {
    return axios.get(`${base.test}/house/list`)
  },
  // 房源详情
  houseDetail (id, params) {
    return axios.get(`${base.test}/house/detail?id=${id}`, {
      params: params
    })
  },
  // 分类下的房源
  cateHouseLsit (params) {
    return axios.get(`${base.test}/cate/houselsit`, {
      params: params
    })
  },
  // 搜索房源
  searchHouseLsit (params) {
    return axios.get(`${base.test}/search/house/list`, {
      params: params
    })
  }

}
export default house
