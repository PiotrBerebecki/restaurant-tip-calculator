/* initially hide the results para */
document.getElementById('totalTip').style.display = "none";

/* run on click */
document.getElementById('calculate').onclick = function () {
	mathFunction();
}


/* math function */
function mathFunction() {


	/* assign entered values as named variables */
	var billAmount = document.getElementById('billAmount').value;
	var serviceQuality = document.getElementById('serviceQuality').value;
	var totalPeople = document.getElementById('totalPeople').value;


	/* error pop ups if no data enteres */
	if (billAmount == "" || billAmount == 0 || serviceQuality == 0) {
		alert('ERROR - Please enter how much you have paid and please also rate the quality of the service.');
		return;
	}

	/* number of people is 1 if no value entered */
	if (totalPeople == "" || totalPeople == 0 || totalPeople == 1) {
		totalPeople = 1;
		document.getElementById('each').style.display = "none";
	} else {
		document.getElementById('each').style.display = "block";
	}


	/* tip calculation*/
	var total = (billAmount * serviceQuality) / totalPeople; 
	total = Math.round(total * 100) / 100; /* round to 2 decimals */
	total = total.toFixed(2);


	/* display result */
	document.getElementById('totalTip').style.display = "block";
	document.getElementById('tipResult').innerHTML = total;


}







