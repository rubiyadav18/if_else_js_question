let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter a number--")

if (number<=10){
    console.log("number is less than 10")
}
else if (number>=10 && number<=20){
    console.log("number is less than 20")
}
else if (number>=20){
    console.log("greater than 20")
}