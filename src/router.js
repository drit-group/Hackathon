import { createWebHistory , createRouter } from 'vue-router'
// // //
import home from '../src/pages/home.vue'
import intro from '../src/pages/introduce.vue'
import manual from '../src/pages/manual.vue'
import gallery from '../src/pages/gallery.vue'
import Teams from '../src/pages/BestTeams.vue'
import aboutUs from '../src/pages/aboutUs.vue'

const routes = [
     {path:'/' , component:home},
     {path:'/introduce', component:intro},
     {path:'/manual' , component:manual},
     {path:'/gallery' , component:gallery},
     {path: '/Teams',component:Teams},
     {path:'/aboutUs',component:aboutUs},
     {path:'/Hackathon' , component:home}
]

const router = createRouter({
     routes,
     history:createWebHistory()
})
 

export default router
