/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function showMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
/* Write your implementation of displayMessage() */
function greeting(timeStr) {
  const time = parseInt(timeStr, 10);
  if (hour > 17) return "Good Evening"
  if (hour < 12) return "Good Morning"
  return "Good Afternoon"
}
