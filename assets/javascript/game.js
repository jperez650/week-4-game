
$(document).ready(function(){





//Random number between 19-120
var targetNumber = randomNumberGenerator(19,120);
//Math.floor(Math.random()*(120-19)+19);
$("#targetNumber").text(targetNumber);

console.log("randomNumber",targetNumber)


//Variables
var wins = 0;
var losses = 0;
var totalScore = 0;
//Replace the ...
$("#wins").text(wins);
$("#losses").text(losses);
$("#totalScore").text(totalScore);
//crystalValueAssig funtion creates and assigns values to the crystals
function crystalValueAssig(){
//Empty array to hold the random numbers for crystals
var crystalArr = [];
//While loop to create 4 random numbers and push them to the empty array
while (crystalArr.length < 4) {
	var crystalRandom = randomNumberGenerator(1,12);
	// Math.floor(Math.random()*(12-2+1)+1);
		if (crystalArr.indexOf(crystalRandom)===-1){
				crystalArr.push(crystalRandom);					
	}
}
//Assign the values from empty array to the different pictures
$("#picOne").attr("value",crystalArr[0]);
$("#picTwo").attr("value",crystalArr[1]);
$("#picThree").attr("value",crystalArr[2]);
$("#picFour").attr("value",crystalArr[3]);

console.log("crystalRandom", crystalArr);
}
//Calls crystalValueAssign function
crystalValueAssig();

//
$(".crystal-image").on("click", function() {
	$(".alert").html("");
// var imagePicked = $(this).attr("id");
var imagePicked = parseInt($(this).attr("value"));
// console.log("Image Picked", imagePicked);
console.log("image picked value", imagePicked)
// totalScore = totalScore + imagePicked
totalScore += imagePicked
$("#totalScore").text(totalScore);


if (totalScore > targetNumber){
	losses++;
	$("#losses").text(losses);
	// alert("You Suck")
	$(".alert").html("<h>Boooooo you lost!</h2>");
	reset();
}
else if (totalScore === targetNumber) {
	wins++;
	$("#wins").text(wins);
	// alert("You Rock!")
	$(".alert").html("<h>Yeaaah you won!</h2>");
	reset();
}
});
function reset (){
	targetNumber = randomNumberGenerator(19,120)
	$("#targetNumber").text(targetNumber);


	totalScore = 0
	$("#totalScore").text(totalScore);
	// $("alert").text("")
	crystalValueAssig()
}

});

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}




