// Feet To Mile 
// 1 feet = 0.000189394 Mile
// now we convert it ... 

function feetToMile(feet){
    var mile = feet / 0.000189394
    return mile;
}

var firstMile = feetToMile(20);
console.log(firstMile);
var secondMile = feetToMile(10000);
var thirdMile = feetToMile(2500);
var forthMile = feetToMile(3000000);
console.log(secondMile,thirdMile,forthMile);