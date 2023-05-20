import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: "ecomm-ecardona",
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
