<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },
  setup(){
    let router = useRouter()
    let {user} = getUser()
    watch(user,()=>{
      if(!user.value){
        router.push("/")
      }
    })
  }
}
</script>

<style>

</style>