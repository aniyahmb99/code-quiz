let questions = ["Arrays in Javascript can be used to store ____________.",
    "String values must be enclosed within blank ____________ when being assigned to variables.",
    "Avery useful tool used during development and debugging for printing content to the debugger is:",
    "The condition in an if / else statement is enclosed within _________________.", " Commonly used date types do NOT include:"];

let startBtn = document.querySelector("#startBtnId");
let time = document.querySelector("h3");
let timeSecond = 60;
let timeMinute = 2;

time.innerHTML = '00:${timeSecond}';
time.innerHTML = '${timeMinute}:00';



function handleTime() {
    let countDown = setInterval(() => {
        timeSecond--;
        time.innerHTML = `00\:${timeSecond}`;

        if (timeSecond <= 0 || timeSecond < 1) {
            clearInterval(countDown)
        }
    }, 1000);

    let countDownMinute = setInterval(() => {
        timeMinute--;
        time.innerHTML = `${timeMinute}\:00`;

        if (timeMinute <= 0 || timeMinute < 1) {
            clearInterval(countDownMinute)
        }
    }, 60000);
}



function startQuiz() {
    let message = "Begin!";
    alert(message);
    document.getElementById("paragraphContainer").style.visibility = "hidden";
    document.getElementById("paragraphContainer").innerHTML = questions;



}



startBtn.addEventListener("click", startQuiz, handleTime);

