import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mint from "mint-ui";
import 'mint-ui/lib/style.css'

// 安装插件
Vue.use(Mint) //其实就是注册所有的全局组件， 和给Vue.prototype挂载一些对象，方便使用   组件内的this.xxx就能用了

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');