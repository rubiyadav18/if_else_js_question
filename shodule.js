
let readlineSync=require("readline-sync")
var time=readlineSync.questionInt("enter a number----")
if (time >= 5 && time <= 6) {
    console.log(" this is sleep time",time)
}
else if (time>=6 && time <=7){
    console.log("this is morning exersice time",time)
}
else if (time>=7 && time<=8.30){
    console.log("this is brekfast time",time)
}
else if(time>=8.30 && time<=12.30){
    console.log("this is study time")
}