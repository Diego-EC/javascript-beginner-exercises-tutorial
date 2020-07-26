var age = prompt('What is your age?');

// Your code below:
if (isNaN(age)){
    console.log("the entered value is not a number");
}else{
    var ageToPrint = parseInt(age) + 10;
    console.log(ageToPrint);
}
