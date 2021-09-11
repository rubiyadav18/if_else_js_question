let readlineSync=require('readline-sync')
var leeter=readlineSync.questionInt("enter a number--")
if (leeter<1){
    console.log("then more water needs to be filled")
}
else if (leeter>=1 && leeter==10){
    console.log("then there is no need to fill water")
}
else if (leeter>10){
    console.log("then the water will overflow")
}
