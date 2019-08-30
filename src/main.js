//入口文件
import Vue from '../node_modules/vue/dist/vue.js'

import VueRouter from "vue-router"
Vue.use(VueRouter);

import Axios from 'axios'
Vue.prototype.axios=Axios;



import router from './router/router.js'
//组件引入
import app from './app.vue'
//样式引入
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import { Header ,Swipe, SwipeItem ,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


//过滤器
Vue.filter('data',function (datastr,pattern = "YYYY-MM-DD HH:mm:ss") {

});

var vm = new Vue({
    el:'#app',
    data:{
        msg:'aaaa',
    },
    methods:{},
    render:c=>c(app),
    router,
});
