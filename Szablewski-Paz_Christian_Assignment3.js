setDisplay("0") //initializes the display to be 0
//global varibables
var result;
var buffer;
var currentOp;

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   setDisplay("0")
   buffer = 0;
   result = 0;
   currentOp;
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerText = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   if((result*10)+num <= 999999999)
   {
      result*=10;
      result+=num;
      setDisplay(result);
   }
   else
   {
      result = 999999999;
      setDisplay(result);
   }
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if(result)
   {
      currentOp = op;
      buffer = result;
      result = 0;
   }
   else
   {
      currentOp = op;
   }
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if(!buffer && !result && currentOp == "/")
   {
      setDisplay("ERROR")
   }
   else{
      	if(currentOp == "+")
      	  	result = buffer + result;
      	else if(currentOp == "-")
      	  	result = buffer - result;
      	else if(currentOp == "*")
      	  	result = buffer * result;
      	else
      	  	result = Math.floor(buffer/result);
      	 /*you have no idea how weird it is doing
      	 these statements when you are used to
      	 python syntax lol!*/
          setDisplay(result)
   }
}
