/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let msg = ""
  // str.split([separator[, limit]])
  let splitString = string.split(':');
  console.log(splitString);
  //
  let oldTime = splitString[0];
  console.log(oldTime);

  let time = parseInt(oldTime, 10);
  console.log(time);

  // Testing
  // let time = 11 // "Good Morning"
  // let time = 15 // "Good Afternoon"
  // let time = 20 // "Good Evening"


  if (time < 12) {
    msg = "Good Morning";
  } else if (time > 17) {
    msg = "Good Evening";
  } else {
    msg = "Good Afternoon";
  }

  return msg;


}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.querySelector('h1');
  // greeting.innerText = greet(string);
  greeting.innerText = string;
}
