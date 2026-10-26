// Greeting changes with the time of day (conditionals)
const hour = new Date().getHours();
let greetingText = "";

if (hour < 12) {
  greetingText = "Good morning! I'm Mirza Zubair";
} else if (hour < 18) {
  greetingText = "Good afternoon! I'm Mirza Zubair";
} else {
  greetingText = "Good evening! I'm Mirza Zubair";
}

document.getElementById("greeting").textContent = greetingText;

// Footer year updates itself every year (function)
function setYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
}

setYear();
