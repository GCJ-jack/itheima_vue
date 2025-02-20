// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


// Vue.config.productionTip = false


// Vue.use(ElementUI);


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
import { createApp } from 'vue';  // Vue 3 中的 API
import App from './App.vue';
import router from './router'; // 引入路由

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);  // 创建应用实例
app.use(router);  // 使用 Vue Router
app.use(ElementPlus);  // 使用 Element Plus
app.mount('#app');  // 挂载应用
