
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
const database = firebase.database();

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("login").style.display = "none";
            document.getElementById("dashboard").style.display = "block";
            loadDashboardData();
        })
        .catch(error => {
            alert("Login Failed: " + error.message);
        });
}

function logout() {
    auth.signOut().then(() => {
        document.getElementById("dashboard").style.display = "none";
        document.getElementById("login").style.display = "flex";
    });
}

function showTab(tab) {
    document.querySelectorAll(".content").forEach(el => el.classList.remove("active"));
    document.querySelector(`#${tab}`).classList.add("active");

    document.querySelectorAll(".nav button").forEach(el => el.classList.remove("active"));
    document.querySelector(`#${tab}Tab`).classList.add("active");
}

function loadDashboardData() {
    // Load train data
    database.ref("trains").on("value", snapshot => {
        const trainList = document.getElementById("trainList");
        trainList.innerHTML = ""; // Clear existing list
        snapshot.forEach(train => {
            const li = document.createElement("li");
            li.textContent = `Train ${train.key}: ${train.val().position}`;
            trainList.appendChild(li);
        });
    });

    // Load player data
    database.ref("players").on("value", snapshot => {
        const playerTable = document.getElementById("playerTable");
        playerTable.innerHTML = ""; // Clear existing table
        snapshot.forEach(player => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.textContent = player.key;
            const roleCell = document.createElement("td");
            roleCell.textContent = player.val().role;
            row.appendChild(nameCell);
            row.appendChild(roleCell);
            playerTable.appendChild(row);
        });
    });
}