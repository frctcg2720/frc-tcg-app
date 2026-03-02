import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3O1lINNqRPc2KfmVKnk7n0tIJzWgxYcc",
  authDomain: "frc-tcg-app-2026.firebaseapp.com",
  databaseURL: "https://frc-tcg-app-2026-default-rtdb.firebaseio.com",
  projectId: "frc-tcg-app-2026",
  storageBucket: "frc-tcg-app-2026.firebasestorage.app",
  messagingSenderId: "702678200061",
  appId: "1:702678200061:web:4d66dc8771f9193f581894"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
