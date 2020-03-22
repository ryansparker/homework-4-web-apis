var questions = [ 
    {
    title:"1. Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    answer: "<script>"
    },
    {
    title:"2. How do you write \"Hello World\" in an alert box?",
    options: ["msgBox(\"Hello World\")\;", "alertBox(\"Hello World\")\;", "msg(\"Hello World\")\;", "alert(\"Hello World\")\;"],
    answer: "alert(\"Hello World\")\;"
    },
    {
    title:"3.How do you create a function in JavaScript?",
    options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
    answer: "function myFunction()"
    },
    {
    title:"4.How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"],
    answer: "if (i == 5)"
    },
    {
    title:"5. How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
    options: ["if i <> 5", "if (i != 5)", "if (i <> 5)", "if i =! 5 then"],
    answer: "if (i != 5)"
    },

]


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
  
  

  //create elements for intro page
  var startPageEl = document.createElement("h1");
  var startPageSubEl = document.createElement("h2");
  var startBtn = document.createElement("button");


// Set the text content of start page elements
  startPageEl.textContent = "Javascript Quiz";
  startPageSubEl.textContent = "Press the button to begin";
  startBtn.textContent = "Start";



  // Append all of our start page elements
  startScreenEl.append(startPageEl);
  startScreenEl.append(startPageSubEl);
  startScreenEl.append(startBtn);


  // Style all of our start page elements
  startPageEl.setAttribute("style", "margin-top:30px; width:100%; text-align:center;");
  startPageSubEl.setAttribute("style", "margin-top:20px; width:100%; text-align:center;");
  startBtn.setAttribute("style", "margin-top:40px; width:25%; text-align:center;");



  // button clicks to new page
  startBtn.addEventListener ("click", function(event) {
    setTime();
    startScreenEl.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    event.preventDefault();
    getQuestion();

  });
  
function getQuestion() {

    var response = "1st Question";
    questionEl.textContent = response;

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
