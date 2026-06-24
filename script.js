function checkAnswer(answer) {
  let result = document.getElementById("result");

  if (answer === "correct") {
    result.innerHTML = "🎉 Correct Answer!";
    result.style.color = "lightgreen";
  } else {
    result.innerHTML = "❌ Wrong Answer!";
    result.style.color = "red";
  }
}

function submitForm() {
  document.getElementById("formMsg").innerHTML =
    "✅ Message sent successfully!";
  return false;
}

function generateChallenge() {
  const challenges = [
    "Reverse a string",
    "Find factorial of a number",
    "Check palindrome",
    "Print Fibonacci series",
    "Check prime number"
  ];

  let random = Math.floor(Math.random() * challenges.length);
  document.getElementById("challenge").innerText = challenges[random];
}
