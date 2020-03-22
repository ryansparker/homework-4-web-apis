// var questions = [ 
//     {
//     title:"1. Inside which HTML element do we put the JavaScript?",
//     options: ["<script>", "<js>", "<javascript>", "<scripting>"],
//     answer: "<script>"
//     },
//     {
//     title:"2. How do you write \"Hello World\" in an alert box?",
//     options: ["msgBox(\"Hello World\")\;", "alertBox(\"Hello World\")\;", "msg(\"Hello World\")\;", "alert(\"Hello World\")\;"],
//     answer: "alert(\"Hello World\")\;"
//     },
//     {
//     title:"3.How do you create a function in JavaScript?",
//     options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
//     answer: "function myFunction()"
//     },
//     {
//     title:"4.How to write an IF statement in JavaScript?",
//     options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"],
//     answer: "if (i == 5)"
//     },
//     {
//     title:"5. How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
//     options: ["if i <> 5", "if (i != 5)", "if (i <> 5)", "if i =! 5 then"],
//     answer: "if (i != 5)"
//     }
// ];

// defined variables for timer
var timerEl = document.getElementById("timer");
var startScreenEl = document.getElementById("startScreen");
var questionEl = document.getElementById("questionScreen");
var secondsLeft = 101;
var timerInterval;
var currentQuestionIndex = 0;

// timer function
function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
      }
    }, 1000);
  }
  //START PAGE ELEMENTS
  //create elements for START PAGE
  var startH1El = document.createElement("h1");
  var startH2El = document.createElement("h2");
  var startBtn = document.createElement("button");
  // Set the text content of START PAGE elements
  startH1El.textContent = "Javascript Quiz";
  startH2El.textContent = "Press the button to begin";
  startBtn.textContent = "Start";
  // Append START PAGE elements
  startScreenEl.append(startH1El);
  startScreenEl.append(startH2El);
  startScreenEl.append(startBtn);
  // Style START PAGE elements
  startH1El.setAttribute("style", "margin-top:30px; width:100%; text-align:center;");
  startH2El.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
  startBtn.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");

  //QUESTION 1 ELEMENTS
  //create elements for QUESTION 1 PAGE
  var quest1El =document.createElement("h2");
  var quest1option1 = document.createElement("button");
  var quest1option2 = document.createElement("button");
  var quest1option3 = document.createElement("button");
  var quest1option4 = document.createElement("button");
  var q1Div = document.getElementById("question");
  var q1o1div = document.getElementById("answer1");
  var q1o2div = document.getElementById("answer2");
  var q1o3div = document.getElementById("answer3");
  var q1o4div = document.getElementById("answer4");
  
  // set the text content for QUESTION 1 PAGE
  quest1El.textContent = "1. Inside which HTML element do we put the JavaScript?";
  quest1option1.textContent = "<script>";
  quest1option2.textContent = "<js>";
  quest1option3.textContent = "<javascript>";
  quest1option4.textContent = "<scripting>";

  // Append QUESTION 1 PAGE elements
  questionEl.append(quest1El);
  q1o1div.append(quest1option1);
  q1o2div.append(quest1option2);
  q1o3div.append(quest1option3);
  q1o4div.append(quest1option4);



  // Style QUESTION 1 PAGE
  quest1El.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
  quest1option1.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
  quest1option2.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
  quest1option3.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");
  quest1option4.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");

  // button clicks to new page
  startBtn.addEventListener ("click", function(event) {
    setTime();
    startScreenEl.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    event.preventDefault();
    getQuestion();

  });
  
function getQuestion() {




}


 




    // start button clicked
        //start the timer
        //get question (make a getQuestion function)
            //add html elements: title, possible answers (click event for the button which points to the option button clicks)

    // option button clicks
        //is the question correct, compare the choice the user made against the answer
        //was it answered correctly? 
        //if wrong, decrease the timer
        //are there more questions?
             //yes more questions: (call the getQuestion function)
             //no more questions: call the final screen function
        
    // save button clicks for the end page
        //collect the initials they entered
        //create an array of key (initials) value (score) pairs, saved in local storage
        //when finished, redirected to the high score page. Values come from local storage and are displayed on screen 
