import { createRouter, createWebHistory } from 'vue-router'

import CoachDetails from '@/pages/coaches/CoachDetails'
import CoachRegistration from '@/pages/coaches/CoachRegistration'
import CoachesList from '@/pages/coaches/CoachesList'
import ContactCoach from '@/pages/requests/ContactCoach'
import RequestsReceived from '@/pages/requests/RequestsReceived'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    children: [
      {
        path: 'contact',
        component: ContactCoach
      }
    ]
  },
  {
    path: '/register',
    component: CoachRegistration
  },
  {
    path: '/requests',
    component: RequestsReceived
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
