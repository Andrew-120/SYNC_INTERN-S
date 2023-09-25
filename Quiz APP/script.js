const quizData = [
    {
        question: "What is the capital of France?",
        options: [
            { text: "Paris", imageUrl: "paris.jpg" },
            { text: "Berlin", imageUrl: "berlin.jpg" },
            { text: "Madrid", imageUrl: "madrid.jpg" },
            { text: "Rome", imageUrl: "rome.jpg" }
        ],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { text: "Mars", imageUrl: "mars.jpg" },
            { text: "Venus", imageUrl: "venus.jpg" },
            { text: "Jupiter", imageUrl: "jupiter.jpg" },
            { text: "Saturn", imageUrl: "saturn.jpg" }
        ],
        correct: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            { text: "Shakespeare", imageUrl: "shakespeare.jpg" },
            { text: "Tolstoy", imageUrl: "tolstoy.jpg" },
            { text: "Hemingway", imageUrl: "hemingway.jpg" },
            { text: "Fitzgerald", imageUrl: "fitzgerald.jpg" }
        ],
        correct: "Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: [
            { text: "Elephant", imageUrl: "elephant.jpg" },
            { text: "Giraffe", imageUrl: "giraffe.jpg" },
            { text: "Whale", imageUrl: "whale.jpg" },
            { text: "Rhinoceros", imageUrl: "rhinoceros.jpg" }
        ],
        correct: "Whale"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: [
            { text: "Mount Kilimanjaro", imageUrl: "kilimanjaro.jpg" },
            { text: "Mount Everest", imageUrl: "everest.jpg" },
            { text: "Mount Fuji", imageUrl: "fuji.jpg" },
            { text: "Mount McKinley", imageUrl: "mckinley.jpg" }
        ],
        correct: "Mount Everest"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: [
            { text: "Mars", imageUrl: "mars.jpg" },
            { text: "Venus", imageUrl: "venus.jpg" },
            { text: "Jupiter", imageUrl: "jupiter.jpg" },
            { text: "Saturn", imageUrl: "saturn.jpg" }
        ],
        correct: "Jupiter"
    },
    {
        question: "Who was the first person to step on the Moon?",
        options: [
            { text: "Buzz Aldrin", imageUrl: "buzz.jpg" },
            { text: "John Glenn", imageUrl: "glenn.jpg" },
            { text: "Neil Armstrong", imageUrl: "armstrong.jpg" },
            { text: "Yuri Gagarin", imageUrl: "gagarin.jpg" }
        ],
        correct: "Neil Armstrong"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: [
            { text: "Oxygen", imageUrl: "oxygen.jpg" },
            { text: "Carbon Dioxide", imageUrl: "co2.jpg" },
            { text: "Nitrogen", imageUrl: "nitrogen.jpg" },
            { text: "Hydrogen", imageUrl: "hydrogen.jpg" }
        ],
        correct: "Carbon Dioxide"
    },
    {
        question: "What is the largest ocean in the world?",
        options: [
            { text: "Atlantic Ocean", imageUrl: "atlantic.jpg" },
            { text: "Indian Ocean", imageUrl: "indian.jpg" },
            { text: "Arctic Ocean", imageUrl: "arctic.jpg" },
            { text: "Pacific Ocean", imageUrl: "pacific.jpg" }
        ],
        correct: "Pacific Ocean"
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        options: [
            { text: "F. Scott Fitzgerald", imageUrl: "fitzgerald.jpg" },
            { text: "Ernest Hemingway", imageUrl: "hemingway.jpg" },
            { text: "Mark Twain", imageUrl: "twain.jpg" },
            { text: "J.D. Salinger", imageUrl: "salinger.jpg" }
        ],
        correct: "F. Scott Fitzgerald"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreValue = document.getElementById("score-value");
const quizForm = document.getElementById("quiz-form");

const quizDurationInMinutes = 5;
let timeLeftInSeconds = quizDurationInMinutes * 60;

const timerElement = document.getElementById("timer");
const timeLeftElement = document.getElementById("time-left");

function updateTimer() {
    const minutes = Math.floor(timeLeftInSeconds / 60);
    const seconds = timeLeftInSeconds % 60;

    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeftElement.textContent = formattedTime;

    if (timeLeftInSeconds <= 0) {
        showResult();
    } else {
        timeLeftInSeconds--;
    }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const optionData = question.options[i];
        const option = document.createElement("div");
        option.className = "option";

        const optionImage = document.createElement("img");
        optionImage.src = optionData.imageUrl;
        optionImage.alt = optionData.text;
        option.appendChild(optionImage);

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answer";
        radioInput.value = optionData.text;
        radioInput.id = "option" + i;

        option.appendChild(radioInput);

        const label = document.createElement("label");
        label.htmlFor = "option" + i;
        label.textContent = optionData.text;
        option.appendChild(label);

        optionsContainer.appendChild(option);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const selectedValue = selectedOption.value;
    const correctAnswer = quizData[currentQuestion].correct;

    if (selectedValue === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }

    selectedOption.checked = false;
}

function showResult() {
    clearInterval(timerInterval);
    questionElement.textContent = "Quiz completed!";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreValue.textContent = score + " / " + quizData.length;
    document.body.style.backgroundImage = "none";

    // Show the score element
    const scoreElement = document.getElementById("score");
    scoreElement.style.display = "block";
}

quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    checkAnswer();
});

loadQuestion();
