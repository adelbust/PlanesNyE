// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const buttons = document.getElementById("buttons");

loginButton.addEventListener("click", () => {
  loginUser(emailInput.value, passwordInput.value);
});

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso
    })
    .catch((error) => {
      // Manejar errores aquí, como mostrar un mensaje de error
      console.error(error.message);
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // El usuario está autenticado
    loginForm.style.display = "none";
    buttons.style.display = "flex";
  } else {
    // El usuario no está autenticado
    loginForm.style.display = "block";
    buttons.style.display = "none";
  }
});

function checkUserStatus() {
  const loginForm = document.getElementById("login-form");
  const appContent = document.getElementById("app-content");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // El usuario está autenticado
      loginForm.classList.add("hidden");
      appContent.classList.remove("hidden");
    } else {
      // El usuario no está autenticado
      loginForm.classList.remove("hidden");
      appContent.classList.add("hidden");
    }
  });
}

checkUserStatus();

document.addEventListener("DOMContentLoaded", function () {
  checkUserStatus();
});
