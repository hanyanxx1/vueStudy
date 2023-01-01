import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
// 静态导入
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'
import News from '../views/News.vue'
import Parent from '../views/Parent.vue'
import StyleOne from '../views/StyleOne.vue'
import StyleTwo from '../views/StyleTwo.vue'
import Page from '../views/Page.vue'
import ShopTop from '../views/ShopTop.vue'
import ShopMain from '../views/ShopMain.vue'
import ShopFooter from '../views/ShopFooter.vue'
// 路由懒加载，用到时再加载
const Home=()=>import('../views/Home.vue')
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [{
        path: "/",
        // 重定向
        // redirect:'/home'
        // 命名路由
        // redirect:{name:"home"}
        // 方法
        redirect: (to) => {
            // console.log(to);
            return {
                path: "/home"
            }
        }
    },
    {
        path: '/home',
        name: "home",
        component: Home
    },
    {
        path: '/about',
        component: About,
        // 每路守卫(路由独享的守卫)
        beforeEnter:(to,from,next)=>{//token
            console.log(to);
            console.log(from);
            if(123 === 123453){
                next()
            }
        }
    },
    {
        // 动态路由
        path: '/user/:id',
        component: User,
        props: true
    },
    {
        // 动态路由的参数一定是数字
        // path: "/news/:id(\\d+)",
        // 有多个参数 +
        // path: "/news/:id+",
        // 参数可有可无 * ,参数可以重复叠加
        name: "news",
        path: "/news/:id*",
        // 参数可有可无 ? ,但是参数不可以重复叠加
        // path: "/news/:id?",
        component: News
    },
    {
        path: "/parent",
        alias: ['/father', '/fuqin'], //起别名
        component: Parent,
        children: [{
                path: "styleone",
                component: StyleOne
            },
            {
                path: "styletwo",
                component: StyleTwo,

            }
        ],
    },

    {
        path: "/page",
        component: Page
    },
    {
        path: "/shop/:id",
        components: {
            default: ShopMain,
            // 它们与 `<router-view>` 上的 `name` 属性匹配
            ShopTop: ShopTop,
            ShopFooter: ShopFooter
        },
        props: {
            default: true,
            ShopFooter: true,
            ShopTop: false
        }
    },

    {
        // 404页面
        //使用正则的方式,匹配任意的
        path: '/:path(.*)',
        component: NotFound
    },

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(),
    // history模式,二者区别，有无#
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
// 全局守卫
// router.beforeEach((to,from,next)=>{
//     console.log(to);
//     console.log(from);
//     next()//通行证
// })
export default router