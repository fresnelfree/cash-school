
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cours.vue') },
      {
        path: '/connexion',
        component: () => import('pages/Connexion.vue')
      },
      {
        path: '/creer_compte',
        component: () => import('pages/Creer_Compte.vue')
      },
      {
        path: '/paiement',
        component: () => import('pages/Paiement.vue')
      },
      {
        path: '/responsable',
        component: () => import('pages/Index.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
