/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  if (parseInt(time) < 12) {
    greeting = "Good Morning";
  } else if (parseInt(time) >= 12 && parseInt(time) < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening"
  }
  return greeting
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}