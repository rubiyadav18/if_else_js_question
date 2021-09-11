let readlineSync=require('readline-sync')
var a=readlineSync.questionInt("enter a number--")
if (a%2==0){
    console.log('it is even',a);
}
else{
    console.log('odd',a);}
    