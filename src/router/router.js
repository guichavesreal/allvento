import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from "../components/Products.vue"
import Tasks from "../components/Tasks.vue"
import Customers from "../components/Customers.vue"

Vue.use(VueRouter)



const routes = [
  { path: '/products', component: Products },
  { path: '/tasks', component: Tasks },
  { path: '/customers', component: Customers }
]

const router = new VueRouter({
  routes 
})

export default router