import Vue from "vue";
import Router from "vue-router";
// import store from '@/store'
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: '/login',
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
            // beforeEnter: (to, from, next) => {
            //     if(store.state.authenticated == false) {
            //         next('/');
            //     } else {
            //         next();
            //     }
            // }
        },
        // {
        //     path: "/assets",
        //     name: "Assets",
        //     component: Assets,
        //     beforeEnter: (to, from, next) => {
        //         if(store.state.authenticated == false) {
        //             next('/');
        //         } else {
        //             next();
        //         }
        //     }
        // },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        // {
        //     path: "/register",
        //     name: "Signup",
        //     component: Signup,
        // },
    ],
});