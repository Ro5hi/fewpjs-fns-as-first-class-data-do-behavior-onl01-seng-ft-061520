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
function greet(timeStr) {
  const time = parseInt(timeStr, 10);
  if (hour > 12) return "Good evening"
  if (hour < 12) return "Good morning"
  return "Good afternoon"
}
