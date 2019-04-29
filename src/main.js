// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'font-awesome/css/font-awesome.min.css' 
import './common/dialogDrag'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.prototype.$axios=axios;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('username');
  if (!role && to.path !== '/login') {
      next('/login');
  } else if(to.meta.permission){
    role=="admin"?next():next('/403')
  }else{
    if (window.navigator.userAgent.indexOf('MSIE')>-1 && to.path==='/editor') {
        Vue.prototype.$alert('你的浏览器太low了，请下载最新版浏览器查看','浏览器low')
    } else {
      //这一个必须写，否则不会跳转
      next()
      
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
