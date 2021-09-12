let readlineSync=require('readline-sync')
var day=readlineSync.question("enter a day----")
if (day=="monday" || day=="tuesday"){
    console.log("poha\ndaliya")
}
else if (day == "tuesday"){
    console.log("sandbich\nidly")
}
else if (day == "wednesday"){
    console.log("pneer pudi\naalu pratha")
}
else if (day == "thursday"){
    console.log("dosa--\nsprouts-")
}
else if (day == "friday"){
    console.log("paneer\in sweets\ngulab jamun")
}
else if (day == "saturday") {
    console.log("again idly\ndosa")
}
else if (day == "sunday"){
    console.log("holiday\n")

}
else {
      console.log("Please enter valid week day")
    }
    