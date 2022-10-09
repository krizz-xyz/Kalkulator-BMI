var weight, height, measure, bmi, error ;

function kalkulator() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";

	bmi = weight/((height*height)/10000);
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Jumlah BMI Mu " + bmi + " Yang Artinya " + "Kamu Kurus";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Jumlah BMI Mu " + bmi + " Yang Artinya " + "Kamu Ideal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Jumlah BMI Mu " + bmi + " Yang Artinya " + "Kamu Gendut";
	} else if (bmi >= 30) {
		measure = "Jumlah BMI Mu " + bmi + " Yang Artinya " + "Kamu Obesitas";
	}
	

	if (weight === 0 ) {
		document.getElementById("hasil").innerHTML = error;
	} else if (height === 0){
		document.getElementById("hasil").innerHTML = error;
	}
	 else {

		document.getElementById("hasil").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("hasil").innerHTML = "Negative Values not Allowed";
	}
}