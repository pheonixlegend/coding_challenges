/*
var johnHeight = 1.95;
var markHeight = 1.69;
var johnMass = 92;
var markMass = 78;

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

var greaterBmi = markBmi > johnBmi;
console.log(johnBmi + ' ' + markBmi);
console.log("Is Mark's Bmi greater than John's Bmi? " + greaterBmi);

*/

var teamJohn, teamMike;
var average, averageJohn, averageMike;

averageJohn = (89 + 120 + 103) / 3;
averageMike = (116 + 94 + 123) / 3;

// console.log(averageJohn + ' ' + averageMike);

if (averageJohn > averageMike) {
    console.log("John's team is the winner with an average score of " + averageJohn);
}
else if (averageJohn < averageMike) {
    console.log("Mike's team is the winner with an average score of " + averageMike);
}
else {
    console.log("It's a draw.")
}
