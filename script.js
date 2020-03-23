
var questions = [ 
  {
  question:"1. Inside which HTML element do we put the JavaScript?",
  options: ["<script>", "<js>", "<javascript>", "<scripting>"],
  answer: "<script>"
  },
  {
  question:"2. How do you write \"Hello World\" in an alert box?",
  options: ["msgBox(\"Hello World\")\;", "alertBox(\"Hello World\")\;", "msg(\"Hello World\")\;", "alert(\"Hello World\")\;"],
  answer: "alert(\"Hello World\")\;"
  },
  {
  question:"3.How do you create a function in JavaScript?",
  options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
  answer: "function myFunction()"
  },
  {
  question:"4.How to write an IF statement in JavaScript?",
  options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"],
  answer: "if (i == 5)"
  },
  {
  question:"5. How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
  options: ["if i <> 5", "if (i != 5)", "if (i <> 5)", "if i =! 5 then"],
  answer: "if (i != 5)"
  },

];

// defined variables for timer
var timer = document.getElementById("timer");
var startScreen = document.getElementById("startScreen");
var questionScreen = document.getElementById("questionScreen");
var secondsLeft = 101;
var timerInterval;
var currentQuestionIndex = 0;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var rightAnswer = document.getElementById("right");
var wrongAnswer = document.getElementById("wrong");

// timer function
function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
      }
    }, 1000);
  }
  

  //create elements for START SCREEN
  var startPageEl = document.createElement("h1");
  var startPageSubEl = document.createElement("h2");
  var startBtn = document.createElement("button");

  // Set the text content of START SCREEN elements
  startPageEl.textContent = "Javascript Quiz";
  startPageSubEl.textContent = "Press the button to begin";
  startBtn.textContent = "Start";

  // Append all of our START SCREEN elements
  startScreen.append(startPageEl);
  startScreen.append(startPageSubEl);
  startScreen.append(startBtn);


  // Style all of our START SCREEN elements
  startPageEl.setAttribute("style", "margin-top:30px; width:100%; text-align:center;");
  startPageSubEl.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
  startBtn.setAttribute("class", "btn");


  // button clicks to new page
  startBtn.addEventListener ("click", function(event) {
    setTime();
    startScreen.setAttribute("class", "hide");
    questionScreen.removeAttribute("class", "hide");
    event.preventDefault();
    getQuestion();
  });
  
function getQuestion() {
  questionElement.innerText = questions[0].question;
  button1.innerText = questions[0].options[0];
  button2.innerText = questions[0].options[1];
  button3.innerText = questions[0].options[2];
  button4.innerText = questions[0].options[3];
  
  button1.addEventListener ("click", function(event) {
    rightAnswer.removeAttribute("class", "hide");
    nextQuestion();
  })

  // var button = document.createElement("button");
 
  // questions.options.forEach(answer => {
    
    // button.innerText = options.text;
    // button.classList.add('btn');
    // button.addEventListener("click", nextQuestion);
    // answerButtonsElement.appendChild(button);
  // })
}

function nextQuestion() {
  questionElement.innerText = questions[1].question;
  button1.innerText = questions[1].options[0];
  button2.innerText = questions[1].options[1];
  button3.innerText = questions[1].options[2];
  button4.innerText = questions[1].options[3];
}

function showQuestion(question) {
  

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

