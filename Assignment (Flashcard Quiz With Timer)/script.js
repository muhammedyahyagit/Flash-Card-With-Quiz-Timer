let questions =[
    {
      question: "How many days are there in a week?",
      answer: "Seven",
    },
    {
      question: "Which fruit is known as the 'king of fruits'?",
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
  let flashCard  = document.getElementById("flashcard")
  let timerDiv = document.getElementById("timer")
  let startBtn = document.getElementById("start")
  let showAnswer = document.getElementById("show-answer")
  let nextQuestion = document.getElementById("next-question")

  let correctQuestion = 0;
  let timer;
  let time = 10;


  startBtn.addEventListener("click" , function(){
    correctQuestion = 0;
    flashCard.textContent = questions[currentQuestion].question
    
  })

  



























































































































































































//   startBtn.addEventListener("click" , function() {
//     currentQuestion = 0;
//     flashCard.textContent = questions[currentQuestion].question
//     showAnswer.disabled = false
//     nextQuestion.disabled = false
//     timestart()
    
//   })


// showAnswer.addEventListener("click" ,  function () {
//     flashCard.textContent = questions[currentQuestion].answer

//   })

//   nextQuestion.addEventListener("click" , function () {
//         if (currentQuestion < questions.length -1) {
//             time = 10;
//             currentQuestion ++
//             flashCard.textContent = questions[currentQuestion].question
//             timestart()
//         } else{
//             quizEnd()
//         }
//   })


//   function timestart() {
//     clearInterval(timer)
//     timer = setInterval(() => {
//        if (time > 0) {
//         time --
//         timerDiv.textContent = `Time Left ${time}`
//        } else{
//         clearInterval(timer)
//         nextQuestion.click()
//        }
//     }, 1000);
//   }

//   function quizEnd() {
//     clearInterval(timer)
//     flashCard.textContent = "Quiz Finished"
//     timerDiv.textContent = ""
//     showAnswer.disabled = true;
//     nextQuestion.disabled = true;
//   }






















// const questions = [
//     { question: "What is 2 + 2?", answer: "4" },
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
//   ];

//   document.getElementById("startQuiz").addEventListener("click", startQuiz);

// let currentQuestion = 0;
// let timer;

// function startQuiz() {
//   currentQuestion = 0;
//   showQuestion();
//   startTimer();
// }

// function showQuestion() {
//   const flashcard = document.getElementById("flashcard");
//   flashcard.textContent = questions[currentQuestion].question;
//   document.getElementById("showAnswer").disabled = false;
//   document.getElementById("nextQuestion").disabled = false;
// }


// document.getElementById("showAnswer").addEventListener("click", function () {
//     const flashcard = document.getElementById("flashcard");
//     flashcard.textContent = questions[currentQuestion].answer;
//   });

//   document.getElementById("nextQuestion").addEventListener("click", function () {
//     if (currentQuestion < questions.length - 1) {
//       currentQuestion++;
//       showQuestion();
//       resetTimer();
//     } else {
//       endQuiz();
//     }
//   });

//   function startTimer() {
//     let timeLeft = 10;
//     document.getElementById("timer").textContent = `Time left: ${timeLeft}`;
//     timer = setInterval(() => {
//       timeLeft--;
//       document.getElementById("timer").textContent = `Time left: ${timeLeft}`;
//       if (timeLeft <= 0) {
//         clearInterval(timer);
//         document.getElementById("nextQuestion").click(); // Automatically move to next question
//       }
//     }, 1000);
//   }
  
//   function resetTimer() {
//     clearInterval(timer);
//     startTimer();
//   }

//   function endQuiz() {
//     clearInterval(timer);
//     document.getElementById("flashcard").textContent = "Quiz Finished!";
//     document.getElementById("showAnswer").disabled = true;
//     document.getElementById("nextQuestion").disabled = true;
//   }
  