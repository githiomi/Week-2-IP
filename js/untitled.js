function akanReveal() {

if (gen === "f") {

	var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

	var DD = parseInt(document.getElementById("date").value);
		/*if (dob < 1 || dob > 31){
			alert("Enter a vaild date")
		}*/
	var MM = parseInt(document.getElementById("month").value);
		/*if (mob < 1 || dob > 12){
			alert("Enter a vaild month (00-12)");
		}*/
	var CC = parseInt(document.getElementById("century").value);
		/*if (cob < 1 || dob > 20){
			alert("Enter a vaild century (00-20)");
		}*/
	var YY = parseInt(document.getElementById("year").value);
		/*if (yob < 1 || dob > 20){
			alert("Enter a vaild year (00-20)");
		}*/

	var dateCheck = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

	var fName = fNames[dateCheck];
 
 	document.getElementByID("akanName").innerHTML = + fName;

 } else if (gen === "m"{

 	var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

 	var DD = parseInt(document.getElementById("date").value);
		/*if (dob < 1 || dob > 31){
			alert("Enter a vaild date")
		}*/
	var MM = parseInt(document.getElementById("month").value);
		/*if (mob < 1 || dob > 12){
			alert("Enter a vaild month (00-12)");
		}*/
	var CC = parseInt(document.getElementById("century").value);
		/*if (cob < 1 || dob > 20){
			alert("Enter a vaild century (00-20)");
		}*/
	var YY = parseInt(document.getElementById("year").value);
		/*if (yob < 1 || dob > 20){
			alert("Enter a vaild year (00-20)");
		}*/

	var dateCheck = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
 
 	var mName = mNames[dateCheck];
 
 	document.getElementByID("akanName").innerHTML = + mName;
 }

else{

	alert("Wrong");
 }

};

