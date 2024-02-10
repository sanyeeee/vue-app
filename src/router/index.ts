import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../views/layouts/LayoutComponent.vue'
import Homepage from '../views/pages/HomepageComponent.vue'
import SignUp from '../views/pages/SignUpComponent.vue'



// Routes
const routes: any [] = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Homepage
            },
            {
                path: 'sign-up',
                component: SignUp
            }
        ]
    }
]

// Create the routes instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Export the router
export default router
