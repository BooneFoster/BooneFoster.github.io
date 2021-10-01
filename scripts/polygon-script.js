//Polygon Function

function polygon(){
//Takes a value in and sets it to answer, also declares a result variable.
	var answer = prompt("Please enter an integer 1-10 to learn its polygon equivalent: ");
	var result = "";

//Makes answer positive and then rounds to the nearest integer.
	answer = Math.abs(answer);
	answer = Math.round(answer);

//Checks value of answer to figure out which polygon it is.
	if(answer == 0)
		result = "no such polygon";
	if(answer > 10)
		result = "answer not yet retrievable";
	if(answer == 1)
		result = "henagon";
	if(answer == 2)
		result = "digon";	
	if(answer == 3)
		result = "trigon";
	if(answer == 4)
		result = "tetragon";
	if(answer == 5)
		result = "pentagon";
	if(answer == 6)
		result = "hexagon";
	if(answer == 7)
		result = "septagon";
	if(answer == 8)
		result = "octagon";
	if(answer == 9)
		result = "nonagon";
	if(answer == 10)
		result = "undecagon";

//Prints the result to the screen.
	document.write("Your polygon equivalent is: " + result + "!");
}