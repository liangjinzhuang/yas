/**
 * api接口的统一出口
 */

// 用户模块接口
import user from '@/api/user'
// 轮播图接口
import banner from '@/api/banner'
// 房源接口
import house from '@/api/house'
// 社区模块接口
import community from '@/api/community'
// 注册接口
import register from '@/api/register'
// 登录接口
import login from '@/api/login'
// 收藏接口
import likes from '@/api/likes'
// 其他模块接口....

// 导出接口
export default {
  user,
  banner,
  house,
  community,
  register,
  login,
  likes
}
