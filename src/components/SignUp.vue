<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signup">
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { useSignup } from "@/composables/useSignup";
import { ref } from "vue";
export default {
  emits:['enterChatroom'],
  setup(props,context) {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = useSignup();
    let signup = async () => {
      let response = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if(response){
        context.emit("enterChatroom")
      }
      
    };

    return { displayName, email, password, signup, error };
  },
};
</script>

<style></style>
