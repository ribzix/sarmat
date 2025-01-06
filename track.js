// Simulating track circuit updates
const trackCircuits = {
    circuit1: document.getElementById("circuit1"),
    circuit2: document.getElementById("circuit2"),
    circuit3: document.getElementById("circuit3"),
  };
  
  const train = document.getElementById("train1");
  
  const statusElements = {
    circuit1: document.getElementById("status1"),
    circuit2: document.getElementById("status2"),
    circuit3: document.getElementById("status3"),
  };
  
  // Example function to update track circuit states
  function updateTrackCircuit(circuitId, isActive) {
    if (isActive) {
      trackCircuits[circuitId].classList.add("active");
      statusElements[circuitId].textContent = "Active";
    } else {
      trackCircuits[circuitId].classList.remove("active");
      statusElements[circuitId].textContent = "Inactive";
    }
  }
  
  // Example function to update train position
  function updateTrainPosition(x, y) {
    train.setAttribute("cx", x);
    train.setAttribute("cy", y);
  }
  
  // Simulating updates from Roblox
  setTimeout(() => {
    updateTrackCircuit("circuit1", true);
    updateTrainPosition(150, 60);
  }, 2000);
  
  setTimeout(() => {
    updateTrackCircuit("circuit2", true);
    updateTrackCircuit("circuit1", false);
    updateTrainPosition(150, 110);
  }, 4000);
  
  setTimeout(() => {
    updateTrackCircuit("circuit3", true);
    updateTrackCircuit("circuit2", false);
    updateTrainPosition(150, 160);
  }, 6000);
  