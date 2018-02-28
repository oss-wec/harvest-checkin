import Vue from 'vue'
import Router from 'vue-router'
import CheckinForm from '@/components/CheckinForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CheckinForm',
      component: CheckinForm
    }
  ]
})
