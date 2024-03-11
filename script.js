// Array of questions
const questions = [
    {
      question: "What is the output of 'console.log(5 + " + "3)' in JavaScript?",
      options: ["7", "8", "10"],
      answer: 2,
      explanation: "Lorem ipsum"
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Number", "String", "Boolean", "Pizza"],
      answer: 3,
      explanation: "Lorem ipsum"
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onclick", "onmouseover", "onfocus"],
      answer: 1,
      explanation: "Lorem ipsum"
    }
  ];
  
  // Function to display the question and options
  function showQuestion() {
    const qIndex = Math.floor(Math.random() * questions.length);
    const q = questions[qIndex];
  
    const questionEl = document.getElementById("question");
    questionEl.textContent = q.question;
  
    const optionsEl = document.getElementsByTagName("input");
    for (let i = 0; i < optionsEl.length; i++) {
      optionsEl[i].value = q.options[i];
      optionsEl[i].checked = false;
    }
  
    // Store the current question index for answer checking
    currentQuestionIndex = qIndex;
  }
  
  // Function to check the answer
  function checkAnswer() {
    const userAnswer = Number(document.querySelector('input[name="option"]:checked').value);
    const correctAnswer = questions[currentQuestionIndex].answer;
    const explanationforAnswer = questions[currentQuestionIndex].explanation;
    if (userAnswer === correctAnswer) {
      alert("Correct!" + questions[currentQuestionIndex].explanation);
    } else {
      alert("Incorrect. The correct answer is: " + questions[currentQuestionIndex].options[correctAnswer] + " " + questions[currentQuestionIndex].explanation);
    }
  
    // Move on to the next question
    questions.splice(currentQuestionIndex, 1);
    if (questions.length === 0) {
      alert("Quiz completed!");
    } else {
      showQuestion();
    }
  }
  
  // Initialize the quiz
  showQuestion();
  
  // Event listener for the check answer button
  document.getElementById("check-answer-btn").addEventListener("click", checkAnswer);