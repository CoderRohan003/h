import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const apiKeyEnv = process.env.REACT_APP_API_KEY;
const authDomainEnv = process.env.REACT_APP_AUTH_DOMAIN;
const projectIdEnv = process.env.REACT_APP_PROJECT_ID;
const storageBucketEnv = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderIdEnv = process.env.REACT_APP_MESSAGE_SENDER_ID;
const appIdEnv = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey: apiKeyEnv,
  authDomain: authDomainEnv,
  projectId: projectIdEnv,
  storageBucket: storageBucketEnv,
  messagingSenderId: messagingSenderIdEnv,
  appId: appIdEnv 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
