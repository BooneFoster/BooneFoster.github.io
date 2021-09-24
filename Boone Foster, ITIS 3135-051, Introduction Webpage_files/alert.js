// first-scripts.html JavaScript file, written by Boone Foster

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