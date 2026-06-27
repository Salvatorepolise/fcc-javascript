const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Which language runs in a web browser?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    category: "Art",
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
    answer: "Leonardo da Vinci"
  }
];
// Returns a random question object
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Returns a random choice from the available options
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// Compares the choice to the correct answer
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}