import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD94yT9PUJ-9G0E3e8I2GmkDEA6WRs84Q0",
  authDomain: "f2arabia.firebaseapp.com",
  projectId: "f2arabia",
  storageBucket: "f2arabia.appspot.com",
  messagingSenderId: "863317697553",
  appId: "1:863317697553:web:b493c621a144a03761bdb0",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
