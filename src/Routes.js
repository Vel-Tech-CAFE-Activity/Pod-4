// import loadImage from './components/loadImage.vue';
// import lazyLoad from './components/lazyLoad.vue';
// import loginIn from './components/loginIn';

// // export default[
// //     {
// //         name: 'loginIn',
// //         path: '/',
// //         component: loginIn
// //     },
// //     {
// //         name: 'loadImage',
// //         path: '/loadImage',
// //         component: loadImage
// //     },
// //     {
// //         name: 'lazyLoad',
// //         path: '/lazyLoad',
// //         component: lazyLoad
// //     },
    
// // ];
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'loginIn',
//     component: () => import('./components/loginIn.vue')
//   },
//   {
//     path: '/lazyLoad',
//     name: 'lazyLoad',
//     component: () => import('./components/lazyLoad.vue')
//   },
//   {
//     path: '/loadImage',
//     name: 'loadImage',
//     component: () => import('./components/loadImage.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router;
// second trail
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App.vue'
// import { createApp } from 'vue'


// import loginIn from './components/loginIn'
// import loadImage from './components/loadImage.vue'
// import lazyLoad from './components/lazyLoad.vue'


// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [
//     { path: '/', component: loginIn },
//     { path: '/loadImage', component: loadImage },
//     { path: '/lazyLoad', component: lazyLoad }
//   ]
// })

// createApp({
//   router,
//   render: () => h(App)
// }).mount('#app')
