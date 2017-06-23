
import Vue from 'vue'; //引入vue
import store from './store';	//加载状态管理器
import router from './router';//加载路由器

import App from './App.vue';//引入app.vue

let vm= new Vue({
  el:"#app",
  router,
  store,
  render:(h)=>h(App)
});
// window.$vm=vm;
export default vm;

