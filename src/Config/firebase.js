// Import Firebase functions (modular SDK)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your updated Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD-Y9sQ-1fsKVcnZr4QiX9w6hY4SyYBX1c",
  authDomain: "movieapp-1d3f0.firebaseapp.com",
  projectId: "movieapp-1d3f0",
  storageBucket: "movieapp-1d3f0.firebasestorage.app",
  messagingSenderId: "577390783674",
  appId: "1:577390783674:web:adf401c61a021168516683",
  measurementId: "G-5SPLETLR4Q"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export services
export { app, db, auth, analytics };
