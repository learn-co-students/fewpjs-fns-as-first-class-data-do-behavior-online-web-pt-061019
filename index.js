/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let hour = time.split(':')
  hour = parseInt(hour, 10)
  if (hour < 12) {
    return 'Good Morning'
  }
  else if (hour <= 17) {
    return 'Good Afternoon'
  }
  else if (hour > 17) {
    return 'Good Evening'
  }
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}


// parseInt(hour, 10)
// If the input string begins with "0" (a zero), radix is assumed to be 8 (octal) or 10 (decimal). Exactly which radix is chosen is implementation-dependent. ECMAScript 5 clarifies that 10 (decimal) should be used, but not all browsers support this yet. For this reason, always specify a radix when using parseInt.
// If the input string begins with any other value, the radix is 10 (decimal).