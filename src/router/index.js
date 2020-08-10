import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Video from '@/components/Video'
import Feedback from '@/components/Feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/promote',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '*',
      name: 'Video',
      component: Video
    }
  ]
})
