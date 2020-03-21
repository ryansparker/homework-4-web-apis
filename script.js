// defined variables
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");

var secondsLeft = 101;

// timer function
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timerEl.textContent = "0";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
  }
  
  setTime();