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

  //create elements for intro page
  var startPageEl = document.createElement("h1");
  var startPageSubEl = document.createElement("h2");
  var startBtn = document.createElement("button");

//   //create elements for questions
// //   question 1
//   var pg1El = document.createElement("h2");
//   var pg1Quest1El = createElement("button");
//   var pg1Quest2El = createElement("button");
//   var pg1Quest3El = createElement("button");
//   var pg1Quest4El = createElement("button");

// //   question 2
//   var pg2El = document.createElement("h2");
//   var pg2quest1El = document.createElement("button");
//   var pg2quest2El = document.createElement("button");
//   var pg2quest3El = document.createElement("button");
//   var pg2quest4El = document.createElement("button");

// //   question 3
//   var pg3El = document.createElement("h2");
//   var pg3quest1El = document.createElement("button");
//   var pg3quest2El = document.createElement("button");
//   var pg3quest3El = document.createElement("button");
//   var pg3quest4El = document.createElement("button");

// // question 4
//   var pg4El = document.createElement("h2");
//   var pg4quest1El = document.createElement("button");
//   var pg4quest2El = document.createElement("button");
//   var pg4quest3El = document.createElement("button");
//   var pg4quest4El = document.createElement("button");

// // question 5
//   var pg5El = document.createElement("h2");
//   var pg5quest1El = document.createElement("button");
//   var pg5quest2El = document.createElement("button");
//   var pg5quest3El = document.createElement("button");
//   var pg5quest4El = document.createElement("button");

// Set the text content of start page elements
  startPageEl.textContent = "Javascript Quiz";
  startPageSubEl.textContent = "Press the button to begin";
  startBtn.textContent = "Start";

// // Set the text content of question 1 elements
//   pg1El.textContent = "1. Inside which HTML element do we put the JavaScript?";
//   pg1Quest1El.textContent = "<script>";
//   pg1Quest2El.textContent = "<js>";
//   pg1Quest3El.textContent = "<javascript>";
//   pg1Quest4El.textContent = "<scripting>";

  // Append all of our start page elements
  mainEl.append(startPageEl);
  mainEl.append(startPageSubEl);
  mainEl.append(startBtn);

// // Append all of our question 1 elements
//   mainEl.append(pg1El);
//   mainEl.append(pg1Quest1El);
//   mainEl.append(pg1Quest2El);
//   mainEl.append(pg1Quest3El);
//   mainEl.append(pg1Quest4El);

  // Style all of our start page elements
  startPageEl.setAttribute("style", "margin-top:30px; width:100%; text-align:center;");
  startPageSubEl.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
  startBtn.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");

//    // Style all of our question 1 elements
//   pg1El.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
//   pg1Quest1El.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
//   pg1Quest2El.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
//   pg1Quest3El.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
//   pg1Quest4El.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");


  // button clicks to new page
  startBtn.addEventListener ("click", function(event) {
  
    event.preventDefault();

    var response = "1st Question";
    mainEl.textContent = response;
  });
  

  //SIMON QUESTIONS:
  //WHY () IS BLANK SOMETIMES?
    //ASK SIMON WHAT PREVENT DEFAULT MEANS