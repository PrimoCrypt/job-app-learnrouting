import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobsView from '@/views/jobs/Jobs.vue'
import JobsDetails from '@/views/jobs/JobsDetails.vue'
import Error404 from '@/views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetails',
    component: JobsDetails,
    props: true
  },
  // Redirecting
  // {
  //   path: '<the old link>',
  //   redirect: '<the new link>'
  // }
  ,
  // For Error 404
  {
    path: '/:catchAll(.*)',
    name: 'error404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
