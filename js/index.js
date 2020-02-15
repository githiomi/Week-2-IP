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
	var dob = parseInt(document.getElementById("date").value);
		if (dob < 0 || dob > 31){
			alert("Enter a vaild date")
		}
	var mob = parseInt(document.getElementById("month").value);
		if (mob < 0 || dob > 12){
			alert("Enter a vaild month (00-12)");
		}
	var cob = parseInt(document.getElementById("century").value);
		if (cob < 0 || dob > 20){
			alert("Enter a vaild century (00-20)");
		}
	var yob = parseInt(document.getElementById("year").value);
		if (yob < 0 || dob > 20){
			alert("Enter a vaild year (00-20)");
		}


};