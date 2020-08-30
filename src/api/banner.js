/**
 * banner模块接口
 */
import axios from '@/utils/http' // 导入http中创建的axios实例
import base from './base' // 导入接口域名列表
/* import qs from 'qs' // 根据需求是否导入qs模块 */

const banner = {
  // 获取轮播图
  bannerList () {
    return axios.get(`${base.test}/banner`)
  }
}
export default banner
