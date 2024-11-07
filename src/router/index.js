import { auth } from '@/firebase/config'
import ChatroomView from '@/views/ChatroomView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "WelcomeView",
    component: WelcomeView,
    beforeEnter(to,from,next){
      if(!auth.currentUser){
        next()
      }else{
        next({name:'ChatroomView'})
      }
    }
  },
  {
    path: "/chatroom",
    name: "ChatroomView",
    component: ChatroomView,
    beforeEnter(to,from,next){
      if(auth.currentUser){
        next()
      }else{
        next({name:'WelcomeView'})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
