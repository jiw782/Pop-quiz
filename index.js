let score = 0;

const answer1 = prompt(
  "what color is the sky? A. Blue B. Yellow. Please enter only the letter",
);

if (answer1 === "A") {
  alert("You answered..." + answer1 + " " + "Good Job!!!");
  score++;
} else {
  alert("Your answer is incorrect");
}

const answer2 = prompt("Is 5>7 a correct stament? A. Yes B. No");
if (answer2 === "B") {
  alert("You answered..." + answer2 + " " + "Good Job!!!");
  score++;
} else {
  alert("Your answer is incorrect");
}

const answer3 = prompt("which color is grass? A. Red B. Green");
if (answer3 === "B") {
  alert("You answered..." + answer3 + " " + "Good Job!!!");
  score++;
} else {
  alert("Your answer is incorrect");
}

if (score >= 2) {
  alert(`Your score is...${score}. You passed`);
} else {
  alert(`Your score is...${score}. You failed`);
}
