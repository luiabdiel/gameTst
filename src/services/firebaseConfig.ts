import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDp4kzsKOVjNyxnyLvo8mSLw_jcXckjK9E",
  authDomain: "app-masters-games.firebaseapp.com",
  projectId: "app-masters-games",
  storageBucket: "app-masters-games.appspot.com",
  messagingSenderId: "1078249194578",
  appId: "1:1078249194578:web:869f25c5f869874c404b8b",
  measurementId: "G-V8MC15450V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
