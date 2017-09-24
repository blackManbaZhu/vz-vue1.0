// import Login from './views/Login.vue'
import Home  from  './views/test-home.vue'
import Main  from  './views/Main.vue'
import Table from  './views/nav1/computer-maintain.vue'
import Form  from  './views/nav1/computer-config.vue'
import Page1 from  './views/nav2/page1.vue'
import Page2 from  './views/nav2/page2.vue'
import Heart from  './views/nav3/heart.vue'
import Pass  from  './views/nav4/pass-back.vue'
import Page6 from  './views/nav2/Page6.vue'


let routes = [
    {
       path: '/',
       component: Home,
       iconCls: 'el-icon-message',//图标样式class
       leaf: true,//只有一个节点
       icon:'fa fa-home',
       children: [
           { path: '/main', component: Main, name: '首页' }
       ]
    },
    {
        path: '/',
        component: Home,
        name: '电脑相关',
        model:false,
        icon: 'fa fa-windows',
        children: [
            { path: '/computer-maintain', component: Table, name: '电脑维修' },
            { path: '/computer-config', component: Form, name: '电脑配置' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '网络报修',
        icon: 'fa fa-briefcase',
        children: [
           { path: '/page1', component: Page1, name: '常见问题' },
           { path: '/page2', component: Page2, name: '填写问题' }
       ]
    },
    {
        path: '/',
        component: Home,
        name: '心理咨询',
        icon: 'fa fa-heartbeat',
        children: [
           { path: '/heart', component: Heart, name: 'Heart' }
       ]
    },
   {
        path: '/',
        component: Home,
        name: '设置',
        icon: 'fa fa-cog',
        children: [
           { path: '/pass-back', component: Pass, name: '密码找回' }
       ]
    },
    {
        path: '/',
        component: Home,
        name: '我的信息',
        icon:'fa fa-user-circle-o',
        children: [
           { path: '/page6', component: Page6, name: '个人资料' }
       ]
    },
];

export default routes;
