/*This opens/closes the dropdown menu*/
function genderDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function genderChange() {
	var gender = [];
	gender.push(document.getElementsByClassName("dropdown-content"));
	alert(gender);
};

function akanReveal() {

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

	var dCheck = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

	var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

	var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

	if (gender === Male){
		mNames[dCheck];

		document.getElementByID("akanName").innerHTML = "And your Akan Name is: " +mNames;

	} else if (gender === Female){
		fNames[dCheck];

		document.getElementByID("akanName").innerHTML = "And your Akan Name is: " +fNames;

	}else{

		alert("Dates not well input")
	}


};