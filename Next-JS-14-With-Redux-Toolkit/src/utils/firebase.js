import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmEGPAU2q5z_4M-hzDPfEZpz1Ds2Zmbhg",
  authDomain: "miniproject-dcd8d.firebaseapp.com",
  projectId: "miniproject-dcd8d",
  storageBucket: "miniproject-dcd8d.firebasestorage.app",
  messagingSenderId: "757009353596",
  appId: "1:757009353596:web:c95c8c218076315e1472f9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);