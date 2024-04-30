// Router.js
import { createRouter, createWebHistory } from 'vue-router'
import store from './store.js'

// Pages
import MainPage from './pages/MainPage.vue'
import FloorplanSearch from './pages/FloorplanSearch.vue'
import LoginPage from './pages/LoginPage.vue'
import RegistrationPage from './pages/RegistrationPage.vue'
import addPlan from "./pages/addPlan.vue"
import editPlan from "./pages/editPlan"

const routes = [
    { path: '/', component: MainPage },
    { path: '/floorplan-search', component: FloorplanSearch},
    { path: '/login', component: LoginPage},
    { path: '/register', component: RegistrationPage},
    { path: '/add', component: addPlan},
    { path: '/edit', component: editPlan}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.auth.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
});

export default router // Export the router instance