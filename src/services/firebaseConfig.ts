import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from 'firebase/auth';

const databaseURL = import.meta.env.VITE_DATABASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
  databaseURL
};

let app: FirebaseApp;
let analytics: Analytics;
let auth: Auth;
let database: Database;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
    database = getDatabase(app);
  } catch (error) {
    console.log("Não foi possível inicializar o app");
  }
}

export { app, analytics, auth, database }
