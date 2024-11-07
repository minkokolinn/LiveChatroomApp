import { auth } from "@/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { ref } from "vue"

let user = ref(auth.currentUser)

onAuthStateChanged(auth,_user=>{
    console.log("Auth State Changed");
    user.value = _user
})
let getUser = ()=>{
    return {user}
}

export default getUser