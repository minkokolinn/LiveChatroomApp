import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

let error = ref(null)

let createAccount = async(email,password,displayName)=>{
    try {
        let response = await createUserWithEmailAndPassword(auth,email,password)
        if(!response){
          throw new Error("Cannot create a new user!!")
        }
        await updateProfile(response.user,{
          displayName
        })
        return response
      } catch (err) {
        error.value = err.message
        // if(err.code === "auth/email-already-in-use"){
        //   error.value = "Email already in use! Please try a different email"
        // }else{
        //   error.value = err.message
        // }
      }
}

let useSignup = ()=>{
    return {error,createAccount}
}

export {useSignup}