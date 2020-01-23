import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Output from '@/components/Output' //①import


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

//②profile
   {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

   {
      path: '/history',
      name: 'Skill',
      component: Skill
    },

   {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})