// Function to fetch train data from Roblox game
async function fetchTrainData() {
  try {
    const response = await fetch('https://your-roblox-game-api-endpoint/trains');
    const trainData = await response.json();
    renderTrainData(trainData);
  } catch (error) {
    console.error('Error fetching train data:', error);
    document.getElementById('train-data').innerHTML = '<p>Error fetching train data.</p>';
  }
}

// Function to send command to Roblox game
async function sendCommand(command) {
  try {
    await fetch('https://your-roblox-game-api-endpoint/command', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ command })
    });
  } catch (error) {
    console.error('Error sending command:', error);
  }
}

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

// Event listeners for buttons
document.getElementById('open-track').addEventListener('click', () => sendCommand('open'));
document.getElementById('close-track').addEventListener('click', () => sendCommand('close'));

// Fetch train data initially and set interval to refresh
fetchTrainData();
setInterval(fetchTrainData, 5000);
