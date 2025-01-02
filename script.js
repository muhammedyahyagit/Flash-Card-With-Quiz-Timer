let questions =[
    {
      question: "How many days are there in a week?",
      answer: "Seven",
    },
    {
      question: "Which fruit is known as the 'king of fruits?'",
      answer: "Mango",
    },
    {
      question: "How many legs does a spider have?",
      answer: "Eight",
    },
    {
      question: "Which month has 28 or 29 days?",
      answer: "February",
    },
    {
      question: "Which shape has three sides?",
      answer: "Triangle",
    },
  ];
  let flashCard  = document.getElementById("flashcard");
  let timerDiv = document.getElementById("timer");
  let startBtn = document.getElementById("start");
  let showAnswer = document.getElementById("show-answer");
  let nextQuestion = document.getElementById("next-question");

  let timer;
  let time = 10;
  let currentQuestion = 0;


startBtn.addEventListener("click" , function () {
  currentQuestion = 0;
  flashCard.textContent = questions[currentQuestion].question;
  showAnswer.disabled = false;
  nextQuestion.disabled = false;
  startBtn.disabled = true;
   timeLeft()
});

showAnswer.addEventListener("click" , function () {
  flashCard.textContent  = questions[currentQuestion].answer;
});

nextQuestion.addEventListener("click" , function () {
  if (currentQuestion < questions.length -1) {
    currentQuestion ++;
    flashCard.textContent = questions[currentQuestion].question;
    timeLeft()
  }else {
    endQuiz()
  }
});

function timeLeft() {
  clearInterval(timer);
  time = 10;
  timer = setInterval(() => {
    if (time > 0) {
      time --;
      timerDiv.textContent = `Time Left : ${time}`;
    }else{
      clearInterval(timer)
      nextQuestion.click()
    }
  },1000);
};

function endQuiz() {
  flashCard.textContent = "Quiz Finished";
  timerDiv.textContent = " ";
  showAnswer.disabled = true;
  nextQuestion.disabled = true;
  startBtn.disabled = false;
};
