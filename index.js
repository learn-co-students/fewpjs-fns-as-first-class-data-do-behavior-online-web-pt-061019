/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string)  {
  let parsed = parseInt(string, 10);

  if (parsed < 12){
    return "Good Morning";
} else if (parsed > 17){
    return "Good Evening";
} else {
    return "Good Afternoon"
  }
}

  function displayMessage(msg) {
    document.getElementById("greeting").innerText = msg;
}