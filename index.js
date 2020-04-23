/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage()
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let splitString = string.split(':')
  let time = splitString[0]
  let newTime = parseInt(time, 10)

  if (newTime < 12) return "Good Morning"
  if (newTime > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}