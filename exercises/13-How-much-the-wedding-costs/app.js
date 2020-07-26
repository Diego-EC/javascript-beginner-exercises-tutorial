let input = prompt('How many people are coming to your wedding?');

// Your code here
function calculatePrice(numberOfPeople){
    let priceCalculated;

    if(numberOfPeople <= 50){
        priceCalculated = 4000;
    } else if(numberOfPeople <= 100){
        priceCalculated = 10000;
    } else if(numberOfPeople <= 200){
        priceCalculated = 15000;
    } else {
        priceCalculated = 20000;
    }

    return priceCalculated;
}

var price = calculatePrice(input);

console.log('Your wedding will cost '+price+' dollars');