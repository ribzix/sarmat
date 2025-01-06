// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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
