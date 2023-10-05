// elements displayed by id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
//set of questions
let questions = [
  {
    question: "WWW stands for",
    imgSrc: "Stuffs/img/www.jpeg",
    choiceA: "World Whole Web",
    choiceB: "Wide World Web",
    choiceC: "Web World Wide",
    choiceD: "World Wide Web",
    correct: "D",
  },
  {
    question: "Which of the following are components of Central Processing Unit (CPU) ",
    imgSrc: "Stuffs/img/cpu.jpeg",
    choiceA: "Arithmetic logic unit, Control unit",
    choiceB: "Arithmetic logic unit, Integrated Circuits",
    choiceC: "Control Unit, Monitor",
    choiceD: "Arithmetic logic unit, Mouse",
    correct: "A",
  },
  {
    question: "Full form of URL is ?",
    imgSrc: "Stuffs/img/url.jpeg",
    choiceA: "Uniform Resource Locator",
    choiceB: "Uniform Resource Link",
    choiceC: "Uniform Registered Link",
    choiceD: "Unified Resource Link",
    correct: "A",
  },
  {
    question: "Which of the following is smallest unit",
    imgSrc: "Stuffs/img/bit.jpeg",
    choiceA: "Bit",
    choiceB: "KB",
    choiceC: "Nibble",
    choiceD: "Byte",
    correct: "A",
  },
  {
    question: "In which of the following form, data is stored in computer ?",
    imgSrc: "Stuffs/img/binary.jpeg",
    choiceA: "Decimal",
    choiceB: "Binary",
    choiceC: "Hexa Decimal",
    choiceD: "Octal",
    correct: "B",
  },
  {
    question: "What is full form of GUI in terms of computers ?",
    imgSrc: "Stuffs/img/gui.jpeg",
    choiceA: "Graphical user Instrument",
    choiceB: "Graphical unified Interface",
    choiceC: "Graphical unified Instrument",
    choiceD: "Graphical user Interface",
    correct: "D",
  },
  {
    question: "Who is the father of Computers?",
    imgSrc: "Stuffs/img/cb.jpeg",
    choiceA: "James Gosling",
    choiceB: "Charles Babbage",
    choiceC: "Dennis Ritchie",
    choiceD: "Dennis Ritchie",
    correct: "B",
  },
  {
    question: "What is the full form of CPU?",
    imgSrc: "Stuffs/img/cpu.jpeg",
    choiceA: "Computer Processing Unit",
    choiceB: "Computer Principle Unit",
    choiceC: "Central Processing Unit",
    choiceD: " Control Processing Unit",
    correct: "C",
  },
  {
    question:
      "Which of the following computer language is written in binary codes only?",
    imgSrc: "Stuffs/img/machine.jpeg",
    choiceA: "pascal",
    choiceB: "machine language",
    choiceC: "C",
    choiceD: "C#",
    correct: "B",
  },
  {
    question: "Which programming language is known for its use in statistical analysis and data visualization?",
    imgSrc: "Stuffs/img/R.jpeg",
    choiceA: "R",
    choiceB: "Java",
    choiceC: "Go",
    choiceD: "Solidity",
    correct: "A",
  },
  {
    question: "What is the file extension for a Python source code file?",
    imgSrc: "Stuffs/img/py.jpeg",
    choiceA: ".html",
    choiceB: ".css",
    choiceC: ".c",
    choiceD: ".py",
    correct: "D",
  },
  {
    question: "What does the acronym SQL stand for?",
    imgSrc: "Stuffs/img/sql.jpeg",
    choiceA: "Structured Query Language",
    choiceB: "Simple Query Language",
    choiceC: "Standard Query Language",
    choiceD: "System Query Language",
    correct: "A",
  },
  {
    question:
      "What is the purpose of a loop in programming?",
    imgSrc: "Stuffs/img/loop.jpeg",
    choiceA: "To store data",
    choiceB: "To make decision",
    choiceC: "To perform arithmetic operations",
    choiceD: "To repeat a set of instructions",
    correct: "D",
  },
  {
    question: "What does HTML stand for?",
    imgSrc: "Stuffs/img/html.jpeg",
    choiceA: "Hyper Text Markup Language",
    choiceB: "High Text Markup Language",
    choiceC: " Hyperlinks and Text Markup Language",
    choiceD: " Home Tool Markup Language",
    correct: "A",
  },
  {
    question: "What does CSS stands for",
    imgSrc: "Stuffs/img/css.jpeg",
    choiceA: "Cascading Style Sheets",
    choiceB: "Core Style Sheet",
    choiceC: "Capture sheet style",
    choiceD: "none of the above",
    correct: "A",
  },
  {
    question: "Which of the following is NOT a database management system?",
    imgSrc: "Stuffs/img/data.jpeg",
    choiceA: "SQL",
    choiceB: "MongoDB",
    choiceC: "PostgreSQL",
    choiceD: "Photoshop",
    correct: "D",
  },
  {
    question: "Which is not an input device ",
    imgSrc: "Stuffs/img/hardware.jpeg",
    choiceA: "Keyboard",
    choiceB: "Monitr",
    choiceC: "Mouse",
    choiceD: "Touchpad",
    correct: "B",
  },
  {
    question:
      "Which of the following are physical devices of a computer?",
    imgSrc: "Stuffs/img/hardware.jpeg",
    choiceA: "Hardware",
    choiceB: "Software",
    choiceC: "System software",
    choiceD: "None of this",
    correct: "A",
  },
  {
    question: "Which of the following can acess server?",
    imgSrc: "Stuffs/img/client.jpeg",
    choiceA: "Web client",
    choiceB: "Web browser",
    choiceC: "Web browser",
    choiceD: "All of the above",
    correct: "A",
  },
  {
    question: "RAM stands for",
    imgSrc: "Stuffs/img/ram.jpeg",
    choiceA: "Random Accumalate Memory",
    choiceB: "Random Access Memory",
    choiceC: "Reliable Access Memory",
    choiceD: "None of the Above",
    correct: "B",
  },
];

//timer variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 10s

let TIMER;
let score = 0;
// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
start.addEventListener("click", startQuiz);
//initiation of quiz 
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

//counting
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;

    count++;
  } else {
    count = 0;
    // change progress to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      //end of quiz
      clearInterval(TIMER);
      scoreRender();
    }
  }
}
//check for quiz
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = -10;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}
// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";

}
// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
 
}
// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  
 // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Stuffs/img/4.png"
      : scorePerCent >= 60
      ? "Stuffs/img/4.png"
      : scorePerCent >= 40
      ? "Stuffs/img/3.png"
      : scorePerCent >= 20
      ? "Stuffs/img/2.png"
      : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}

var myVar;

function myLoad() {
  myVar = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
