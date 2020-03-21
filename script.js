// defined variables for timer
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

  //create elements for quiz questions
  var startPageEl = document.createElement("h1");
  var startPageSubEl = document.createElement("h2");
  var startBtn = document.createElement("button");

  // Set the text content of relevant elements
  startPageEl.textContent = "Javascript Quiz";
  startPageSubEl.textContent = "Press the button to begin";
  startBtn.textContent = "Start";

  // Append all of our elements
  mainEl.append(startPageEl);
  mainEl.append(startPageSubEl);
  mainEl.append(startBtn);

  // Style all of our elements
  startPageEl.setAttribute("style", "margin-top:30px; width:100%; text-align:center;");
  startPageSubEl.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
  startBtn.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
