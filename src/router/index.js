import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import count2 from '@/components/count2'
import count3 from '@/components/count3'
import count4 from '@/components/count4'
import addText from '@/components/addText'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 使用history模式 当服务端不支持时不要使用该模式
  routes: [
    {
      path: '/',
      name: 'count', // 命名路由可以更好的进行链接和导航
      component: count,
      meta: { // 路由元信息， 自定义的一个对象， 用于导航守卫时控制
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => { // 路由独享守卫，当导航导向该路由时调用
        console.log('beforeEnter this router')
        console.log('to', to)
        console.log('from', from)
        if (to.meta.requiresAuth) { // 导航守卫中可以使用该信息从而进行跳转控制
          next()
        } else {
          console.log('requiresAuth is false')
          next(false)
        }
        // next()
      },
      beforeRouteLeave: (to, from, next) => {
        console.log('beforeRouteLeave this router')
        console.log('to', to)
        console.log('from', from)
        next()
      }
    },
    {
      path: '/count2/:id',
      name: 'count2',
      component: count2,
      props: true, // 使用props向组件传参， 当props设置为true时， route.params将被设置为组件属性
      children: [
        {
          path: 'profile',
          component: count3
        }
      ]
    },
    {
      path: '/count3',
      name: 'count3',
      redirect: '/count2/count3/profile' // 访问/count3时能自动重定向到/count2/count3/profile
    },
    {
      path: '/count4',
      name: 'count4',
      component: count4,
      alias: '/count'
    },
    {
      path: '/addText',
      name: 'addText',
      component: addText,
      meta: { // 路由元信息
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => { // 路由独享守卫，当导航导向该路由时调用
        console.log('beforeEnter this router')
        console.log('to', to)
        console.log('from', from)
        if (to.meta.requiresAuth) { // 导航守卫中可以使用该信息从而进行跳转控制
          next()
        } else {
          console.log('requiresAuth is false')
          next(false)
        }
        next()
      },
      beforeRouteLeave: (to, from, next) => {
        console.log('beforeRouteLeave this router')
        console.log('to', to)
        console.log('from', from)
        next()
      }
    }
  ]
})
