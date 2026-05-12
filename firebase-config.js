// firebase-config.js
// Reads credentials from window.__env__ (injected by env-config.js locally,
// or by the GitHub Actions workflow in production). Never hardcodes keys.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:            window.__env__?.FIREBASE_API_KEY            || "",
  authDomain:        window.__env__?.FIREBASE_AUTH_DOMAIN        || "",
  projectId:         window.__env__?.FIREBASE_PROJECT_ID         || "",
  storageBucket:     window.__env__?.FIREBASE_STORAGE_BUCKET     || "",
  messagingSenderId: window.__env__?.FIREBASE_MESSAGING_SENDER_ID|| "",
  appId:             window.__env__?.FIREBASE_APP_ID             || "",
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };
