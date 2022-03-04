let questions = ["Arrays in Javascript can be used to store ____________.",
    "String values must be enclosed within blank ____________ when being assigned to variables.",
    "Avery useful tool used during development and debugging for printing content to the debugger is:",
    "The condition in an if / else statement is enclosed within _________________.", " Commonly used date types do NOT include:"];

let startBtn = document.querySelector("#startBtnId");
let time = document.querySelector("h3");
let timeSecond = 120;







function handleTime() {
    let countDown = setInterval(() => {
        timeSecond--;
        time.innerHTML = `\:${timeSecond}`;

        if (timeSecond <= 0 || timeSecond < 1) {
            clearInterval(countDown)
        }
    }, 1000);
}



function startQuiz() {
    let message = "Begin!";
    alert(message);
    document.getElementById("paragraphContainer").style.visibility = "hidden";
    document.getElementById("paragraphContainer").innerHTML = questions;

    handleTime();

}



startBtn.addEventListener("click", startQuiz);

