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

// wood calculator ;

function woodCalculator(bed,table,chair){
    var bedWood = bed * 10;
    var tableWood = table *7;
    var chairWood = chair * 3;
    var totalWood = bedWood + tableWood + chairWood;
    return totalWood;
}

var woodResult = woodCalculator(8,2,14);
console.log(woodResult);

// brick calculator 

function brickCalculator(floor){
    var brickForFeetForTenFloor = floor*15;
    var brickForFeetAfterSevenFloor = floor*10;
    var totalBrick = brickForFeetForTenFloor +brickForFeetAfterSevenFloor;
    return totalbrick;
}

// var brickResult = brickCalculator(17);
// console.log(brickResult);


//tiny friend

function tinyFrined(friendsName){
    var tinyFrinedName = names[0];
    for(var i = 0; i<names.length; i++){
        var nameOfFriends = names[i];

    } return nameOfFriends;
}
var tinyResult = tinyFrined(['Rabbi','Emon', 'Mitul', 'Mohiuddin']);
console.log(tinyResult);