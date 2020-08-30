/**
 * article模块接口
 */
import axios from '@/utils/http' // 导入http中创建的axios实例
import base from './base' // 导入接口域名列表
/* import qs from 'qs' // 根据需求是否导入qs模块 */

const user = {
  // 用户信息
  userInfo (params) {
    return axios.post(`${base.test}/user/find`)
  },
  // 用户社区房源列表
  userCommunity (params) {
    return axios.post(`${base.test}/user/myrelease`, params)
  }
}
export default user
