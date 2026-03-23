/*
*   Simple programm (algorithm).
*/

const input = document.getElementById("input");
const element = document.getElementById("result");
const button = document.getElementById("button");
button.addEventListener("click", clickButton);

function clickButton() {
  element.textContent = 'Result: ' + input.value;
}
