import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpFYIORZWe2Sj3HHR1zQLg7GrwsN043Wk",
  authDomain: "jiu-jitsu-store.firebaseapp.com",
  projectId: "jiu-jitsu-store",
  storageBucket: "jiu-jitsu-store.appspot.com",
  messagingSenderId: "696820055843",
  appId: "1:696820055843:web:e09802a459bde59b1fd696"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db