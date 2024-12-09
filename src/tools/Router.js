import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/components/front/Login.vue'
import Home from '../components/front/Home.vue'
import Store from '../tools/Storage'
import Scores from '../components/order/ScoresPage.vue'
import Analyze from '../components/order/AnalyzePage.vue'
import Course from '../components/order/CoursePage.vue'
import Major from '../components/order/MajorPage.vue'
import Revise from '../components/order/RevisePage.vue'

// 创建路由实例
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/front',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'scores',
                    component: Scores,
                    name: 'Scores'
                },
                {
                    path: 'analyze',
                    component: Analyze,
                    name: 'Analyze'
                },
                {
                    path: 'course',
                    component: Course,
                    name: 'Course'
                },
                {
                    path: 'major',
                    component: Major,
                    name: 'Major'
                },
                {
                    path: 'revise',
                    component: Revise,
                    name: 'Revise'
                }
            ],
            redirect: '/home/scores',
        },
    ]
})

// 路由守卫，当未登录时，非登录页面的任何页面都不允许跳转
Router.beforeEach((to, from, next) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || to.name === 'login') {
        next(); // 用户已登录或访问的是登录页面，允许导航继续
    } else {
        next({ name: 'login' }); // 否则，重定向到登录页面
    }
})

export default Router;