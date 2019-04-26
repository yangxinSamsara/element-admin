// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css' 

Vue.config.productionTip = false

Vue.use(ElementUI)

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('username');
  if (!role && to.path !== '/login') {
      next('/login');
  } else if(to.meta.permission){
    role=="admin"?next():next('/403')
  }else{
    //这一个必须写，否则不会跳转
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
