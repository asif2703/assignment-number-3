function inchToFeet(inch){
    var feet = inch / 12
    return feet;

}
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

function feetToMile(feet){
    var mile = feet / 0.000189394;
    return mile ;
}
var firstMile = feetToMile(5080);
console.log(firstMile);



function fruitscal(mango, jack,licu){
    var mangoCount = mango*4;
    var jackCount = jack*4;
    var licuCount = licu *4;
    var total = mangoCount + jackCount + licuCount;
    return total;
}
var mango = fruitscal(5) ;
console.log(mango);
