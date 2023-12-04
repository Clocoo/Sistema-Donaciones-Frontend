// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home', // PAGINA DE INICIO CON IMAGEN RANDOM
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: "/tabla", // PAGINA CON TABLA
        name: "Tabla",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom2.vue')
      },
      {
        path: "/cards", // PAGINA CON TABLA
        name: "Cards",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom3.vue')
      },
      {
        path: "/inforecogidadebackend", // PAGINA CON TABLA
        name: "InfoBackend",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom4.vue')
      },
      {
        path: "/backendDonaciones", // PAGINA CON TABLA
        name: "Donaciones de Backend",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom5.vue')
      },
      {
        path: "/vistaInicioDonaciones", // PAGINA CON TABLA
        name: "VistaIniciodeDonacionesaProyectosconDonatarios",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom6.vue')
      },
      {
        path: "/vistaPersonas", // PAGINA CON TABLA
        name: "VistaPersonas",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom7.vue')
      },
      {
        path: "/vistaProyectos", // PAGINA CON TABLA
        name: "VistaProyectos",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom8.vue')
      },
      {
        path: "/vistaDonatarios", // PAGINA CON TABLA
        name: "VistaDonatarios",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom9.vue')
      },
      {
        path: "/autenticacion", // PAGINA CON TABLA
        name: "Autenticacion",
        component: () => import(/* webpackChunkName: "home" */ '@/views/Hom10Google.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
