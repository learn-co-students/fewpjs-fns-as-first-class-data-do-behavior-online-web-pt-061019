/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let splitTime = time.split(":");
  let parsedTime = parseInt(splitTime[0])
  if (parsedTime < 12) {
    return "Good Morning"
  } else if (parsedTime > 12 && parsedTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */


function displayMessage(update){
  let textNode = document.getElementById("greeting");
  textNode.innerText = update;
}
