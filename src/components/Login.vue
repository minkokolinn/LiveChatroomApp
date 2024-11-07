<template>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <button>Login</button>
  </form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
export default {
  emits:['enterChatroom'],
  setup(props, context) {
    let email = ref("");
    let password = ref("");
    let { error, signIn } = useLogin();
    let login = async () => {
      let response = await signIn(email.value, password.value);
      if (response) {
        context.emit("enterChatroom");
      }
    };

    return { email, password, login, error };
  },
};
</script>

<style></style>
