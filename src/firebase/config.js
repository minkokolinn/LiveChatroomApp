import {initializeApp} from "firebase/app"
import {getFirestore, serverTimestamp} from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAoUjXIJLZAEwf6URY1gjSsJWE8Qr74xrA",
  authDomain: "vue-blog-system-6a053.firebaseapp.com",
  projectId: "vue-blog-system-6a053",
  storageBucket: "vue-blog-system-6a053.firebasestorage.app",
  messagingSenderId: "1057638750106",
  appId: "1:1057638750106:web:f80299aa9a34bfffcacc23",
};

let app = initializeApp(firebaseConfig)

let db = getFirestore(app)
let timestamp = serverTimestamp()
let auth = getAuth(app)

export {db,timestamp,auth}