import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'
const _import = (file) => () => {
  return import(`@/views${file}`)
}
const createRouters = (routes, parent = {}, result = []) => {
  if (Array.isArray(routes)) {
    routes.forEach(route => {
      let routeItem = {}
      let { path, name, title, icon, redirect, aliasPath, index, children, component = null, tabShow } = route
      routeItem = {
        path,
        name,
        redirect,
        children,
        meta: {
          title,
          icon,
          tabShow,
          index
        },
        component: component || _import(aliasPath)
      }
      if (Array.isArray(children)) {
        routeItem['children'] = createRouters(children, routeItem)
      }
      result.push(routeItem)
    })
  }
  return result
}

Vue.use(Router)

const tabbarRouters = [
  {
    path: '/',
    name: 'home',
    title: '首页',
    icon: 'home-o',
    redirect: '/index',
    aliasPath: '/home',
    tabShow: false,
    index: 0,
    children: [
      {
        path: '/',
        name: 'index',
        title: '首页',
        icon: 'home-o',
        aliasPath: '/index',
        tabShow: true,
        index: 1
      },
      {
        path: '/community',
        name: 'community',
        title: '社区',
        icon: 'chat-o',
        aliasPath: '/community',
        tabShow: true,
        index: 2
      },
      {
        path: '/release',
        name: 'release',
        title: '发布',
        icon: 'add-o',
        aliasPath: '/release',
        tabShow: true,
        index: 3
      },
      {
        path: '/user',
        name: 'user',
        title: '我的',
        icon: 'friends-o',
        aliasPath: '/user',
        tabShow: true,
        index: 4
      },
      {
        path: '/list',
        title: ' ',
        icon: '',
        name: 'list',
        aliasPath: '/list',
        tabShow: false,
        index: 5
      },
      {
        path: '/searchlist',
        title: '搜索',
        icon: '',
        name: 'searchlist',
        aliasPath: '/searchlist',
        tabShow: false,
        index: 6
      },
      {
        path: '/myrelease',
        title: '我的发布',
        icon: '',
        name: 'myrelease',
        aliasPath: '/myrelease',
        tabShow: false,
        index: 7
      },
      {
        path: '/likes',
        title: '我的收藏',
        icon: '',
        name: 'likes',
        aliasPath: '/likes',
        tabShow: false,
        index: 8
      },
      {
        path: '/detail',
        title: ' ',
        icon: '',
        name: 'detail',
        aliasPath: '/detail',
        tabShow: false,
        index: 9
      },
      {
        path: '/housedetail',
        title: ' ',
        icon: '',
        name: 'housedetail',
        aliasPath: '/housedetail',
        tabShow: false,
        index: 10
      }
    ]
  }
]

const globalRoutes = [
  {
    path: '/login',
    title: '登录页',
    icon: '',
    name: 'login',
    aliasPath: '/login'
  },
  {
    path: '/register',
    title: '注册页',
    icon: '',
    name: 'register',
    aliasPath: '/register'
  }
]

const routes = createRouters(globalRoutes.concat(tabbarRouters))

const routerData = new Router({
  routes: routes
})

routerData.beforeEach((to, from, next) => {
  console.log('to', to)
  Store.commit('setPageTitle', to.meta.title)
  next()
})

export default routerData
