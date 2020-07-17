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