// first-scripts.html JavaScript file, written by Boone Foster

function introductionFunc(){
	//Comapny Name
	var companyName = "Brazen Falcon Consulting Firm";

	//Gets user name.
	var userName;
	userName = prompt("Please enter User Name: ");

	//Gets users status.
	var status;
	status = prompt("How are you today: ");

	//Calculates date.
	var date = new Date();
	var dateResult = "Today is " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();


	//Calculates time.
	var timestamp = date.getTime();
	var hours = date.getHours();

	if(hours == 0) {
		hours = 12;
	}
	else {
		hours = hours % 12;
	}

	var timeResult = " " + hours + ":" + date.getMinutes();

	//Prints all info on screen
	document.write(dateResult + ", and the time is: " + timeResult);
	document.write(" The " + companyName + " welcomes you, " + userName + "! We're glad you are doing " + status + "!");
}

//Determine if client is of age.
function legalAge(){
	var age;
	age = prompt("Please enter age: ");

	if(age >= 21){
		alert("You are eligible for our services!")
	}
	else {
		alert("We're sorry but you are not yet eligible for our services.")
	}
}

//Calculate approximate cost.
function totalCost(){
	var clients;
	clients = prompt("Please enter how many clients we would be representing: ");

	var days;
	days = prompt("Please enter how many days we would be representing you: ");

	var cost = clients * 2500;
	cost += days * 600;

	alert("Your total cost would be around: $" + cost);
}

//Calculate approximate risk rating.
function riskRating(){
	var cases;
	cases = prompt("Please enter how many cases we would be fighting: ");

	var sanctions;
	sanctions = prompt("Please enter how many sanctions we would be fighting: ")

	var risk = cases * 10;
	risk += sanctions * 2;

	alert("Your approximate risk rating would be: " + risk);
}

//View the firm's win/loss percentage.
function winLoss(){
	alert("Brazen Falcon's Win Loss Percentage: \n 91.3488% \n This number is taken from the 1723 cases tried by the firm so far.")
}

//A button to submit a question to the firm
function question(){
	prompt("We take great pride in taking care of our clients, please leave your question in the box below: ");	
}