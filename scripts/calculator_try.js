//Calculator functions

function calculate(){
	var num1 = prompt("Please enter your first number: ");
	var operator = prompt("Please enter the operator (+, -, *, /): ");
	var num2 = prompt("Please enter your second number: ");

	document.write("Your problem: " + num1 + " " + operator + " " + num2 + " = ");

	var result = 0;
	var realNum1 = parseInt(num1);
	var realNum2 = parseInt(num2);

	if(operator == "+")
		result = realNum1 + realNum2;
	if(operator == "-")
		result = realNum1 - realNum2;
	if(operator == "*")
		result = realNum1 * realNum2;
	if(operator == "/")
		result = realNum1 / realNum2;


	document.write(result + "!");
}