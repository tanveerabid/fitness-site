
var gender = sessionStorage.getItem("gender");
document.getElementById("gender").value = gender;
step1(gender);
window.scrollTo(0, 0);
	
 // console.log(age);
 function step1(gender){
 if (gender == 1) {
				document.getElementById("page1").style.display = "block";
			} else {
				document.getElementById("page1Female").style.display = "block";
			}
 }
 function step2(age){
 	var age = age;
 	document.getElementById("age").value = age;
			if (gender == 1) {
				document.getElementById("page1").style.display = "none";
				document.getElementById("pageHeight").style.display = "block";
			} else {
			
				document.getElementById("page1Female").style.display = "none";
				document.getElementById("pageHeight").style.display = "block";
			}
			window.scrollTo(0, 0);

 }
 function step3(){
 	var inchesinit = document.getElementById("inchesVal").innerHTML;
 	var inchesLength = inchesinit.length;
 	var centimeters = document.getElementById("centimetersVal").innerHTML;
 	centimeters = parseInt(centimeters);
 	if(inchesLength == 6){
 	var feet = inchesinit.charAt(0);
 	 feet = parseInt(feet);
 	var txt = inchesinit.charAt(2);
 	var txt1 = inchesinit.charAt(3);
 	var txt3 = txt.concat(txt1);
 	var inches= parseInt(txt3);
 }else{
 	var feet = inchesinit.charAt(0);
 	feet = parseInt(feet);
 	var txt = inchesinit.charAt(2);
 	var inches = parseInt(txt);
 }
 	inches = feet*12 + inches;
 	inchesconv = inches*2.54;
 	centimeters = centimeters + inchesconv;
 	if(!centimeters == 0){
			document.getElementById("height").value = centimeters;
			document.getElementById("pageHeight").style.display = "none";
			document.getElementById("pageWeight").style.display = "block";
			window.scrollTo(0, 0);
	}else{
	alert("Choose a valid height!");
 	}
}
function step4(){
 	var wpounds = document.getElementById("poundsVal").innerHTML;
 	var wkg = document.getElementById("kilogramsVal").innerHTML;
 	wpounds = parseInt(wpounds);
 	wkg = parseInt(wkg);
 	wpoundscon = wpounds/2.2046;
 	wkg = wkg + wpoundscon;
 	if(!wkg == 0){
			document.getElementById("weight").value = wkg;
			document.getElementById("pageWeight").style.display = "none";
			document.getElementById("pageActivity").style.display = "block";
			window.scrollTo(0, 0);
	}else{
	alert("Choose a valid Weight!");
 	}
}
function step5(act){
	var activity = act;
	document.getElementById("activity").value = activity;
	document.getElementById("pageActivity").style.display = "none";
	document.getElementById("pagemail").style.display = "block";
	window.scrollTo(0, 0);
	
}
function step6(){
	var gender = document.getElementById("gender").value;
	var age = document.getElementById("age").value;
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	var activity = document.getElementById("activity").value;
	var email = document.getElementById("mail").value;
	var calories;

if(validateEmail(email)){
	if(gender == 1){
		var bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
	}else{
		var bmr =  655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
	}
	if(activity == 1){
		calories = bmr * 1.375;
		calories1x = (bmr + 500) * 1.375;
		calories2x = (bmr + 1000) * 1.375;
	}else if(activity == 2){
		calories = bmr * 1.55;
		calories1x = (bmr + 500) * 1.55;
		calories2x = (bmr + 1000)* 1.55;
	}else{
		calories = bmr *  1.725;
		calories1x = (bmr + 500 ) *  1.725;
		calories2x = (bmr + 1000) *  1.725;
	}

		result1 = Math.round(calories);
	result2 = Math.round(calories1x);
	result3 = Math.round(calories2x);
	document.getElementById("result1").innerHTML= "Calories: "+result2;
	// document.getElementById("result2").innerHTML= "You need to consume "+result2+" calories daily in order to gain 1 Pound weight per week";
	// document.getElementById("result3").innerHTML= "You need to consume "+result3+" calories daily in order to gain 2 Pound weight per week";
		document.getElementById("pagemail").style.display = "none";
	document.getElementById("pageresult").style.display = "block";
	window.scrollTo(0, 0);

}else{
	
	alert("enter a valid email Plz!");
}	
}
		



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



var slideval1 = document.getElementById("range1");
var slideval2 = document.getElementById("range2");
var x = document.getElementById("inchesVal");
var y = document.getElementById("centimetersVal");
var a;
slideval1.oninput = function() {
	a = this.value;
	var b = Math.floor(a/12); 
var c = a % 12; //3
    x.innerHTML = b + "'" + c + "''";
}
slideval2.oninput = function() {
    y.innerHTML = this.value;
}



function metric() {
			// Show the metric template

			document.getElementById("imperial").style.display = "none";
			document.getElementById("imperial1").style.display = "none";
			document.getElementById("inchesVal").innerHTML= "0'0''";
			 document.getElementById("range1").value = "0";
			 document.getElementById("checkbox1").checked = false;

			// Hide the imperial template
			document.getElementById("metric").style.display = "block";
			document.getElementById("metric1").style.display = "block";
		}
function imperial() {
			// Hide the metric template
			document.getElementById("metric").style.display = "none";
			document.getElementById("metric1").style.display = "none";
			document.getElementById("centimetersVal").innerHTML= "0";
			document.getElementById("checkbox2").checked = false;
			document.getElementById("range2").value = "0";

			// Show the imperial template
			document.getElementById("imperial").style.display = "block";
			document.getElementById("imperial1").style.display = "block";
		}








var slideval1 = document.getElementById("range3");
var slideval2 = document.getElementById("range4");
var x1 = document.getElementById("poundsVal");
var y1 = document.getElementById("kilogramsVal");



slideval1.oninput = function() {
	x1.innerHTML = this.value;
}
slideval2.oninput = function() {
    y1.innerHTML = this.value;
}

				function metric1() {
			// Show the metric template

			document.getElementById("imperial2").style.display = "none";
			document.getElementById("imperial3").style.display = "none";
			document.getElementById("poundsVal").innerHTML= "0";
			document.getElementById("checkbox3").checked = false;
			document.getElementById("range3").value = "0";
			// Hide the imperial template
			document.getElementById("metric2").style.display = "block";
			document.getElementById("metric3").style.display = "block";
		}

	function imperial1() {
			// Hide the metric template
			document.getElementById("metric2").style.display = "none";
			document.getElementById("metric3").style.display = "none";
			document.getElementById("kilogramsVal").innerHTML= "0";
			document.getElementById("checkbox4").checked = false;
			document.getElementById("range4").value = "0";

			// Show the imperial template
			document.getElementById("imperial2").style.display = "block";
			document.getElementById("imperial3").style.display = "block";
		}




function back(){
window.location.href="index.html";
}
