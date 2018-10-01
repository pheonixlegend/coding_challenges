// Coding Challenge number 1

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



// Coding Challenge number 2

/*var teamJohn, teamMike;
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
}*/




// Coding Challenge number 3

/*
var bill, amount, tips, finalAmount;

function calculateTip(bill) {
    if (bill < 50) {
        amount = 0.2 * bill;
        return amount;
    }

    else if (bill >= 50 && bill <= 200) {
        amount = 0.15 * bill;
        return amount;
    }

    else if (bill > 200) {
        amount = 0.1 * bill;
        return amount;
    }
}

tips = [calculateTip(124), calculateTip(48), calculateTip(268)];
console.log(tips);

finalAmount = ["$" + (tips[0] + 124), "$" + (tips[1] + 48), "$" + (tips[2] + 268)];
console.log(finalAmount);

*/

// Coding Challenge number 4

/*
var mark = {
    fullName: 'Mark Woolsworth',
    mass: 78,
    height: 1.69,
    bmi: 0,
    bmicalculate: function() {
        var finalbmi = this.mass / (this.height * this.height);
        return finalbmi;
    }
};

var john = {
    fullName: 'John Cole',
    mass: 92,
    height: 1.95,
    bmi: 0,
    bmicalculate: function() {
        var finalbmi = this.mass / (this.height * this.height);
        return finalbmi;

    }
};

mark.bmi = mark.bmicalculate();
john.bmi = john.bmicalculate();

console.log(mark, john);

if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has the highest BMI. His BMI is ' + mark.bmi);
}

else if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has the highest BMI. His BMI is ' + john.bmi);
}

else console.log('John and Mark have the same BMI and it\'s ' + john.bmi);
*/

// Testing Loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/


// Looping FORWARDS & BACKWARDS
console.log('Lets Loop FORWARD');

var john = ['John', 'Smith', 'Sierra Leone', 1991, 'Software Engineer'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

console.log(' ');
console.log('Now lets Loop BACKWARDS');


for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}















































