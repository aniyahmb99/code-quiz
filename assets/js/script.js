let questions = ["Arrays in Javascript can be used to store ____________.",
    "String values must be enclosed within blank ____________ when being assigned to variables.",
    "Avery useful tool used during development and debugging for printing content to the debugger is:",
    "The condition in an if / else statement is enclosed within _________________.", " Commonly used date types do NOT include:"];

let startBtn = document.querySelector("#startBtnId");
let time = document.querySelector("h3");
let timeSecond = 120;

time.innerHTML = '00:${timeSecond}';

let countDown = setInterval(()=>{
    timeSecond--;
    time.innerHTML = '00.${timeSecond}';
    if (timeSecond <= 0 || timeSecond < 1) {
        clearInterval(countDown)
    }
}, 1000)

//let timer = select("#timer");
//timer.html(timeLeft - counter);




    
function startQuiz() {
    let message = "Begin!";
    alert(message);


   function startQuestions() {
    
    for (i=0; i < questions.length; i++) {
        if (questions[i].match(myRegex));
    }}

}

function timeIt() {

    }

    

startBtn.addEventListener("click", startQuiz, setInterval);




// <button class="startBtnStyle" id="startBtnId" type="button">Start Quiz</button>




// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
  
//     passwordText.value = password;
  

//   }
  
//   // Add event listener to generate button
//   generateBtn.addEventListener("click", writePassword);