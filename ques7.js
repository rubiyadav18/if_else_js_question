let readlineSync=require("readline-sync")
var number1=readlineSync.questionInt("enter a  number--")
number2=44*33;
if (number1>=number2){
    console.log("number2 is greater than or equal")
}
else{
    console.log("number1 is lesser")
}