// Firebase configuration
const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_PROJECT_ID>.appspot.com",
  messagingSenderId: "<YOUR_SENDER_ID>",
  appId: "<YOUR_APP_ID>"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to render train data
function renderTrainData(trainData) {
  const container = document.getElementById('train-data');
  container.innerHTML = '';

  Object.keys(trainData).forEach(trainId => {
    const train = trainData[trainId];
    const div = document.createElement('div');
    div.className = 'train';
    div.innerHTML = `
      <strong>Train ID:</strong> ${trainId}<br>
      <strong>Current Trigger:</strong> ${train.currentTrigger}<br>
      <strong>Previous Trigger:</strong> ${train.previousTrigger}<br>
      <strong>Timestamp:</strong> ${new Date(train.timestamp * 1000).toLocaleString()}
    `;
    container.appendChild(div);
  });
}

// Listen for updates
const trainsRef = database.ref('trains');
trainsRef.on('value', snapshot => {
  if (snapshot.exists()) {
    renderTrainData(snapshot.val());
  } else {
    document.getElementById('train-data').innerHTML = '<p>No train data available.</p>';
  }
});
