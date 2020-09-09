function addFive(num) { 
    return num+5;
}
var result = addFive(6);
console.log(result);

function getOpposite(num) {
    if(num==0){
        return 0;
    }
    if(num.length>0){
        return -1;
    }
    else{
        return -(num);
    }
}
var result1 = getOpposite(6);
console.log(result1);

function toSeconds(min) {
    return (min*60);
}
var secs = toSeconds(6);
console.log(secs);

function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger("6");
console.log(myint);

function nextNumber(myint) {
    return (myint+1);
}
var myNextint = nextNumber(6);
console.log(myNextint);

function findPerimeter(num1,num2) {
    var res = ((2*num1)+(2*num2));
    return res;
}
var peri = findPerimeter(6,7);
console.log(peri);

function lessThan100(num1,num2) {
    if((num1+num2)<100){
        return true;
    }
    else{
        return false;
    }
}
var res = lessThan100(22,15);
console.log(res);

function CountAnimals(tur,horse,pigs) {
    var res = (2*tur)+(4*horse)+(4*pigs);
    return res;
}
var legs = CountAnimals(2,3,5);
console.log(legs);