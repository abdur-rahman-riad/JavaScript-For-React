// Falsy: "",0,false,null,undifined
let myVar = 5;
if (myVar) {
    myVar = myVar * 2;
    console.log(myVar);
} else {
    myVar = 0;
    console.log(myVar);
}