function akanReveal(gen, DD, MM, CC, YY) {

	var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var gen = document.getElementById("gender").value;

	var DD = parseInt(document.getElementById("date").value);
		if (DD < 1 || DD > 31 || DD !== DD){
			alert("Enter a vaild date")
		}
	var MM = parseInt(document.getElementById("month").value);
		if (MM < 1 || MM > 31 || MM !== MM){
			alert("Enter a vaild month (00-12)");
		}
	var CC = parseInt(document.getElementById("century").value);
		if (CC < 1 || CC > 31 || CC !== CC){
			alert("Enter a vaild century (00-20)");
		}
	var YY = parseInt(document.getElementById("year").value);
		if (YY < 1 || YY > 31 || YY !== YY){
			alert("Enter a vaild year (00-20)");
		}

	var dateCheck = parseInt(((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7));
	
	/*var date = new Date ('${year}-${month}-${dayOfMonth}');
	var dateCheck = date.getDay();*/

	var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


	if (gen === 'M' || gen === "m") {

		var aName = mNames[dateCheck];
		var aDay = day[dateCheck];

		akanName.innerHTML = "And your akan name is: " + aName + " which was on a: " + aDay;

	} else if (gen === 'f' || gen === "F") {

		var aName = fNames[dateCheck];
		var aDay = day[dateCheck];

		akanName.innerHTML = "And your akan name is: " + aName + " which was on a: " + aDay;

	} else {

	alert("Wrong dates");
	
	}
};