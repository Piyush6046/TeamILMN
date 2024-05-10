// gameControls.js

// Function to restart the game
function restart() {
    // Reset any necessary game variables or state
    tetrominoSequence.length = 0;
    playfield.forEach(row => row.fill(0));
    count = 0;
    tetromino = getNextTetromino();
    gameOver = false;
    rAF = requestAnimationFrame(loop);
  }
  
  // Function to pause or play the game
  function pausePlay() {
    if (gameOver) return;
  
    if (rAF) {
      cancelAnimationFrame(rAF);
      rAF = null;
    } else {
      rAF = requestAnimationFrame(loop);
    }
  }
  
  // Function to quit and go back to the home page
  function quit() {
    // Redirect to the home page or perform any necessary actions
    window.location.href = 'index.html'; // Replace 'index.html' with the actual home page URL
  }
  
  // Attach event listeners to buttons
  document.addEventListener('DOMContentLoaded', function() {
    const restartButton = document.getElementById('restartButton');
    const pausePlayButton = document.getElementById('pausePlayButton');
    const quitButton = document.getElementById('quitButton');
  
    restartButton.addEventListener('click', restart);
    pausePlayButton.addEventListener('click', pausePlay);
    quitButton.addEventListener('click', quit);
  });
  