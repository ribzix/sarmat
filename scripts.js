// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTR1aE85BsYpesMGm-E_PBTLRTVpppImE",
  authDomain: "unified-dispatching-center.firebaseapp.com",
  projectId: "unified-dispatching-center",
  storageBucket: "unified-dispatching-center.appspot.com",
  messagingSenderId: "1060170888038",
  appId: "1:1060170888038:web:ef251814f903e673058ea7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          document.getElementById("login").style.display = "none";
          document.getElementById("dashboard").style.display = "block";
      })
      .catch(error => {
          alert("Login Failed: " + error.message);
      });
}

function showTab(tab) {
  document.querySelectorAll(".content").forEach(el => el.classList.remove("active"));
  document.querySelector(`#${tab}`).classList.add("active");

  document.querySelectorAll(".nav button").forEach(el => el.classList.remove("active"));
  document.querySelector(`#${tab}Tab`).classList.add("active");
}
