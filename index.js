/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let timeArray = timeString.split(":")
  let timeNumber = timeArray.join('')
  let timeNumberInt = parseInt(timeNumber)
  // console.log(timeNumberInt)
  if (timeNumberInt <= 1200) {
    return "Good Morning"
  } else if (timeNumberInt > 1200 && timeNumberInt < 1700) {
    return "Good Afternoon"
  } else if (timeNumberInt >= 1700) {
    return "Good Evening"
  } else {
    return "Error"
  }
};

/* Write your implementation of displayMessage() */
function displayMessage(newMessage) {
  let heading = document.querySelector("h1#greeting")
  heading.innerText = newMessage
};
