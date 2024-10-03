import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAIwfg2EWyMhzmhKxubeTEnQqT-LphYN6E",
  authDomain: "todo-app-1d82d.firebaseapp.com",
  projectId: "todo-app-1d82d",
  storageBucket: "todo-app-1d82d.appspot.com",
  messagingSenderId: "956103527871",
  appId: "1:956103527871:web:977b260231ce20d4f2650a"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}