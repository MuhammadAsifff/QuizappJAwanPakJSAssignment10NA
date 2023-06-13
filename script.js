var questions = [
    {
        question: "HTML stands for _____________",
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

var questionContainer = document.getElementById("question-container");
var optionsContainer = document.getElementById("options-container");
var resultContainer = document.getElementById("result-container");
var nextButton = document.getElementById("next-btn");



function loadQuestion() {
    var question = questions[currentQuestion];
    questionContainer.textContent = question.question;
    

    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }


    question.option.forEach(function (option, index) {
        var button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", checkAnswer.bind(null, index));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
    resultContainer.textContent = "";
}



function checkAnswer(selectedOption) {
    var question = questions[currentQuestion];

    if (question.option[selectedOption] === question.correctAns) {
        score++;
    }

    
    Array.from(optionsContainer.children).forEach(function (button) {
        button.disabled = true;
        if (question.correctAns === button.textContent) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
    });

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish";
    }

    nextButton.style.display = "block";
    currentQuestion++;
}

function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.textContent = "Your score: " + score + "/" + questions.length;
}

nextButton.addEventListener("click", function () {
    if (currentQuestion === questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
});

loadQuestion();
