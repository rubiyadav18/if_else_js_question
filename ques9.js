let readlineSync=require("readline-sync")
var age=readlineSync.questionInt("enter a any number---")
// const age =19;
if (age&&age>20)
{
    console.log("age is 18")
}
else if (age===20)
{
    console.log("age is 20")
}
else{

    console.log("age is not 18")

}
