var readlineSync=require("readline-sync")
var num1=readlineSync.questionInt("enter a any number--")
var num2=readlineSync.questionInt("enter a any number--")
if (num1>num2){
    console.log("num1 is greater than num2")
}
else{
    console.log("num2 is greater than num1")
}
