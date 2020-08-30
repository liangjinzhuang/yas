/**
 * likes模块接口
 */
import axios from '@/utils/http' // 导入http中创建的axios实例
import base from './base' // 导入接口域名列表
/* import qs from 'qs' // 根据需求是否导入qs模块 */

const likes = {
  // 收藏接口
  likesAdd (id) {
    return axios.get(`${base.test}/likes?id=${id}`)
  },
  // 取消接口
  removeLikes (id) {
    return axios.get(`${base.test}/remove/likes?id=${id}`)
  },
  // 收藏列表
  likesList () {
    return axios.get(`${base.test}/mylikes`)
  }
}
export default likes
