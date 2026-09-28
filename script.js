const timing = document.getElementById("time");
const container = document.getElementById("container");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
const reset = document.querySelector(".reset");
const close = document.querySelector(".close")
const alertBox = document.querySelector(".alert")

function timer() {
  const timeCheck = new Date();

  timing.textContent = timeCheck.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}

timer();
setInterval(timer, 1000);

const questions = [
  {
    question: "Which keyword creates a constant?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "What does === check?",
    options: ["Value only", "Type only", "Value and type", "Nothing"],
    answer: "Value and type"
  },
  {
    question: "What method can be used to replace text?",
    options: ["reduce", "replace", "remove", "Nothing"],
    answer: "replace"
  },
  {
    question: "What is the phrase learned in programming?",
    options: [
      "hi programming",
      "programming",
      "hello world",
      "welcome user"
    ],
    answer: "hello world"
  }
];

let currentQuestion = 0;


function studentQuestions() {
  const current = questions[currentQuestion];

  const savedAnswer = sessionStorage.getItem(
    `answer${currentQuestion}`
  );

  container.innerHTML = `
    <div class="card">
      <h2>${currentQuestion + 1}. ${current.question}</h2>

      ${current.options
        .map(
          (option) => `
            <label>
              <input
                type="radio"
                name="question"
                value="${option}"
                ${savedAnswer === option ? "checked" : ""}
              >
              ${option}
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

studentQuestions();

function validityCheck() {
  const selected = document.querySelector(
    'input[name="question"]:checked'
  );

  if (!selected) {
    result.textContent = "Select an answer";
    result.style.color = "red";
    return false;
  }

  sessionStorage.setItem(
    `answer${currentQuestion}`,
    selected.value
  );

  result.textContent = "";
  return true;
}

submit.addEventListener("click", () => {
    
  if (!validityCheck()) {
    return;
  }

  if (currentQuestion === questions.length - 1) {
    alertBox.style.visibility = "visible";

    let score = 0;

    questions.forEach((question, index) => {
      const userAnswer = sessionStorage.getItem(`answer${index}`);

      if (userAnswer === question.answer) {
        score++;
      }
      setTimeout(() => {
    alertBox.style.visibility = "hidden";
  }, 2000);
    });

    result.textContent = `Your score is ${score}/${questions.length}`;

    if (score > 2) {
      result.style.color = "green";
    } else {
      result.style.color = "red";
    }
  }
  
});

next.addEventListener("click", () => {
  if (!validityCheck()) {
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    studentQuestions();
    result.textContent = "";
  }
});

previous.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    studentQuestions();
    result.textContent = "";
  }
});

reset.addEventListener("click", () => {
  questions.forEach((_, index) => {
    sessionStorage.removeItem(`answer${index}`);
  });

  currentQuestion = 0;
  alertBox.style.visibility = "hidden"
  result.textContent = "";
  studentQuestions();
});

close.addEventListener("click", () => {
    alertBox.style.visibility = "hidden"
})
