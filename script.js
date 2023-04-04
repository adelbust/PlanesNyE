<<<<<<< HEAD
<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_qYwXQt1uyKXtKXr8rcesr_LgQ6O1qDk",
  authDomain: "strenght-nutrition.firebaseapp.com",
  databaseURL: "https://strenght-nutrition-default-rtdb.firebaseio.com",
  projectId: "strenght-nutrition",
  storageBucket: "strenght-nutrition.appspot.com",
  messagingSenderId: "368421385635",
  appId: "1:368421385635:web:fd15456d81f4fbac9a5616",
  measurementId: "G-K7Y5YFN1YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const buttons = document.getElementById("buttons");

// Obtener la instancia del proveedor de autenticación de Google
const googleAuthProvider = new GoogleAuthProvider();

// Agregar un listener al botón de inicio de sesión con Google
const googleLoginButton = document.getElementById("google-login-button");
googleLoginButton.addEventListener("click", () => {
  signInWithGoogle();
});

// Función para iniciar sesión con Google
function signInWithGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // El inicio de sesión con Google fue exitoso
    })
    .catch((error) => {
      // Manejar errores aquí, como mostrar un mensaje de error
      console.error(error.message);
    });
}

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
=======
=======
>>>>>>> parent of 55dbd94 (-)
function createVideoButton(url) {
  const button = document.createElement("button");
  button.classList.add("video-btn");
  button.textContent = "Ver video";
  button.addEventListener("click", () => {
    const videoModal = document.querySelector(".video-modal");
    const videoContainer = document.querySelector("#video-container");

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "560";
    iframe.height = "315";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    videoContainer.innerHTML = "";
    videoContainer.appendChild(iframe);

    videoModal.style.display = "block";
>>>>>>> parent of 55dbd94 (-)
  });
}

checkUserStatus();

document.addEventListener("DOMContentLoaded", function () {
  checkUserStatus();
});
