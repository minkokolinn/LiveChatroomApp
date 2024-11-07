<template>
  <form>
    <textarea v-model="message" @keypress.enter="handleSubmit" placeholder="Text message and hit enter to send it"></textarea>
  </form>
</template>

<script>
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timestamp } from '@/firebase/config';

import { ref } from 'vue';

export default {
    setup(){
        let message = ref("")
        let {user} = getUser()
        let {error,addDocument} = useCollection("messages")
        let handleSubmit = async()=>{
            let chat = {
                message : message.value,
                name : user.value.displayName,
                created_at : timestamp
            }
            await addDocument(chat)
            message.value = ""
            
        }

        return {message,handleSubmit}
    }
}
</script>

<style>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>