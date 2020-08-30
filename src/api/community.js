/**
 * 社区模块接口
 */
import axios from '@/utils/http' // 导入http中创建的axios实例
import base from './base' // 导入接口域名列表
/* import qs from 'qs' // 根据需求是否导入qs模块  */

const community = {
  // 社区公告
  noticeList () {
    return axios.get(`${base.test}/notice`)
  },
  // 社区公告
  cateList () {
    return axios.get(`${base.test}/cate/list`)
  },
  // 社区列表
  communityList (params) {
    return axios.post(`${base.test}/community/list`, params)
  },
  // 社区房源详情
  communityDetail (id) {
    return axios.get(`${base.test}/community/detail?id=${id}`)
  },
  // 发布社区房源
  communityAdd (params) {
    return axios.post(`${base.test}/community/add`, params)
  }
}
export default community
