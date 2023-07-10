import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getDatabase, Database, set, ref, update, get, child } from 'firebase/database';
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDp4kzsKOVjNyxnyLvo8mSLw_jcXckjK9E",
  authDomain: "app-masters-games.firebaseapp.com",
  projectId: "app-masters-games",
  storageBucket: "app-masters-games.appspot.com",
  messagingSenderId: "1078249194578",
  appId: "1:1078249194578:web:869f25c5f869874c404b8b",
  measurementId: "G-V8MC15450V",
  databaseURL: "https://app-masters-games-default-rtdb.firebaseio.com/"
};

let app: FirebaseApp;
let analytics: Analytics;
let auth: Auth;
let dataBase: Database;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
    dataBase = getDatabase(app);
  } catch (error) {
    console.log("Não foi possível inicializar o app");
  }
}

export { app, analytics, auth, dataBase }
