/*
	When User Click Propmt Open FOr Each Buttons
	Create Functions For Each Operations
	Display Answers Under Button
*/

// Output Divs
var outputAdd = document.getElementById('resultadd');
var outputSub = document.getElementById('resultsub');
var outputMul = document.getElementById('resultmul');
var outputDiv = document.getElementById('resultdiv');
var outputRem = document.getElementById('resultrem');


// outputAdd.innerHTML = "Hello"l8U77 6

function add() {
	var userinput1 = prompt("Enter Your First Number");
	var userinput2 = prompt("Enter Your Second Number");
	// Checking Two Values Are Empty
	if(userinput1 === "" && userinput2 === "") {
		alert("Type Valid Chracters");

	}
	var userinput1Int = parseInt(userinput1);
	var userinput2Int = parseInt(userinput2);
	outputAdd.innerHTML = userinput1Int + userinput2Int;
}

function sub() {
	var userinput1 = prompt("Type Your First Number");
	var userinput2 = prompt("Type Your Second Number");
	if(userinput1 === "" && userinput2 === "") {
		alert("Type Valid Chracters");

	}
	outputSub.innerHTML = userinput1 - userinput2;
}

function mul() {
	var userinput1 = prompt("Type Your First Number");
	var userinput2 = prompt("Type Your Second Number");
	if(userinput1 === "" && userinput2 === "") {
		alert("Type Valid Chracters");

	}
	outputMul.innerHTML = userinput1 * userinput2;
}

function div() {
	var userinput1 = prompt("Type Your First Number");
	var userinput2 = prompt("Type Your Second Number");
	if(userinput1 === "" && userinput2 === "") {
		alert("Type Valid Chracters");

	}
	outputDiv.innerHTML = userinput1 / userinput2;
}

function rem() {
	var userinput1 = prompt("Type Your First Number");
	var userinput2 = prompt("Type Your Second Number");
	if(userinput1 === "" && userinput2 === "") {
		alert("Type Valid Chracters");

	}
	outputRem.innerHTML = userinput1 % userinput2;
}
