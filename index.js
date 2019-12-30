/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let stringTime = time.split(':')[0]
  let intTime = parseInt(stringTime, 10)

  if ((intTime > 0) && (intTime < 12)) {
    return 'Good Morning';
  }
    else if ((intTime > 11) && (intTime < 18)) {
    return 'Good Afternoon';
  } 
    else {
    return 'Good Night';
  }
}

/* Write your implementation of displayMessage() */
// function displayMessage() {

// }