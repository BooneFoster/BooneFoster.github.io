// JavaScript file, written by Boone Foster



//Declare arrays for people and salaries.


//Display results of the employee table.
function displayResults(){

	var people[];
	var salaries[];
	
	var average = 0;
	var highest = 0;

	for(int i = 0; i < salaries.length; i++) {
		average += salaries[i];
		if(salaries[i] > highest)
			highest = salaries[i];
	}
	average /= salaries.length;

	document.getElementById("results").innerHTML = "results: " + average + highest;
}

//Display salary of selected employee.
function displaySalary(){

}

//Add a person and salary to the table.

function addSalary(){
	var salaryInput = document.getElementById("salaryNum").value;
	var nameInput = document.getElementById("dropdown1").value;

	people.push(nameInput);
	salaries.push(salaryInput);
}