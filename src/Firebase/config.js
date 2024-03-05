import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCLRV6u6oIpm2jEYTRLqX5kTtKc-JWDPWk",
  authDomain: "greencircle-bd.firebaseapp.com",
  projectId: "greencircle-bd",
  storageBucket: "greencircle-bd.appspot.com",
  messagingSenderId: "367822165452",
  appId: "1:367822165452:web:329d0b46533a80d979f969"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export { auth, db, storage };
