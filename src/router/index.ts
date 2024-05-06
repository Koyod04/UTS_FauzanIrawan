import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/uts/home.vue')
    },
    {
      path: '/dosen-entry',
      name: 'dsnentry',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/uts/entry-dosen.vue')
    },
    {
      path: '/mahasiswa-entry',
      name: 'mhsEntry',
      component: () => import('../views/uts/entry-mahasiswa.vue')
    },
    {
    path: '/ruangan-entry',
    name: 'rgnentry',
    component: () => import('../views/uts/entry-ruangan.vue')
    }
  ]
})

export default router
