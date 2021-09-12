let readlineSync=require("readline-sync")
var num1=readlineSync.questionInt("enter a number---")
// var num2=readlineSync.questionInt("enter a number--")

if (num1%5==0 && num1%15==0){
    console.log("Divisible by both")
}
else{
    console.log("not by both")
}