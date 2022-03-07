let questions = [
    {
        question: "Arrays in Javascript can be used to store ____________.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within blank ____________ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"
    },
    {
        question: "The condition in an if / else statement is enclosed within _________________.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Commonly used date types do NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        }, correctAnswer: "3"


    }
];


let startBtn = document.querySelector("#startBtnId");
let time = document.querySelector("h3");
let timeSecond = 120;








// timer countdown 
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

    // hides both "Coding Quiz Challenge" and paragraph on button click
    document.getElementById("paragraphContainer").style.visibility = "hidden";
    document.getElementById("heading1").style.visibility = "hidden";
    document.getElementById("startBtnId").style.visibility = "hidden";
    // sets timer to be started on button click
    handleTime();

}




startBtn.addEventListener("click", startQuiz);

