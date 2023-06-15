var questions = [
    {
        question: "Html stands for _____________",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for _____________",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for _____________",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },
    {
        question: "RAM stands for _____________",
        option: ["random access memory", "hyper text markup language", "html", "html"],
        correctAns: "random access memory"
    },
    {
        question: "ROM stands for _____________",
        option: ["read only memory", "hyper text markup language", "html", "html"],
        correctAns: "read only memory"
    }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionElement = document.getElementById("options");
    var nextButton = document.getElementById("nextButton");
    var progressElement = document.getElementById("progress");

    questionElement.textContent = (currentQuestion + 1) + ". " + questions[currentQuestion].question;
    optionElement.innerHTML = "";

    var options = questions[currentQuestion].option;
    for (var i = 0; i < options.length; i++) {
        var button = document.createElement("button");
        button.textContent = options[i];
        button.addEventListener("click", checkAnswer);
        optionElement.appendChild(button);
    }

    progressElement.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
    nextButton.style.display = "none";
}

function checkAnswer(event) {
    var selectedOption = event.target;
    var nextButton = document.getElementById("nextButton");

    if (selectedOption.textContent === questions[currentQuestion].correctAns) {
        score++;
        selectedOption.style.backgroundColor = "green";
    } else {
        selectedOption.style.backgroundColor = "red";
    }

    for (var i = 0; i < questions[currentQuestion].option.length; i++) {
        if (questions[currentQuestion].option[i] === questions[currentQuestion].correctAns) {
            var correctButton = document.getElementsByTagName("button")[i];
            correctButton.style.backgroundColor = "green";
            break;
        }
    }

    nextButton.style.display = "block";
    nextButton.addEventListener("click", nextQuestion);
}

function nextQuestion() {
    var nextButton = document.getElementById("nextButton");

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }

    nextButton.style.display = "none";
}

function showResult() {
    var container = document.getElementsByClassName("container")[0];
    container.innerHTML = "<h2>Quiz Result</h2>";
    container.innerHTML += "<p>You scored " + score + " out of " + questions.length + " questions.</p>";
}

displayQuestion();
