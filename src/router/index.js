import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import("@/views/Home")
const Index = () => import("@/views/Index")
const Table = () => import("@/views/Table")
const Tabs = () => import("@/views/Tabs")
const Form = () => import("@/views/Form")
const Editor = () => import("@/views/Editor")
const Markdown = () => import("@/views/Markdown")
const Icon = () => import("@/views/Icon")
const Charts = () => import("@/views/Charts")
const Drag = () => import("@/views/Drag")
const Dialog = () => import("@/views/Dialog")
const Upload = () => import("@/views/Upload")
const Permission = () => import("@/views/Permission")
const NotFond = () => import("@/views/404")
const Login = () => import("@/views/Login")


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/index',
          component: Index,
          meta: { title: '系统首页' }
        },
        {
          path: '/table',
          component: Table,
          meta: { title: '表格相关' }
        },
        {
          path: '/tabs',
          component: Tabs,
          meta: { title: '消息选项卡' }
        },
        {
          path: '/form',
          component: Form,
          meta: { title: '基础表单' }
        },
        {
          path: '/editor',
          component: Editor,
          meta: { title: '编辑器' }
        },
        {
          path: '/markdown',
          component: Markdown,
          meta: { title: 'Markdown' }
        },
        {
          path: '/upload',
          component: Upload,
          meta: { title: '文件上传' }
        },
        {
          path: '/icon',
          component: Icon,
          meta: { title: '系列图标' }
        },
        {
          path: '/charts',
          component: Charts,
          meta: { title: '图表相关' }
        }, {
          path: '/drag',
          component: Drag,
          meta: { title: '拖拽组件' }
        }, {
          path: '/dialog',
          component: Dialog,
          meta: { title: '拖拽对话框' }
        }, {
          path: '/permission',
          component: Permission,
          meta: { title: '禁止访问' }
        }, {
          path: '/404',
          component: NotFond,
          meta: { title: '页面找不到' }
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: { title: '登录' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
