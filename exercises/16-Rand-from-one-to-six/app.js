function getRandomInt()
{
    //var randomNumber = Math.random();
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (randomNumber > 6){
        randomNumber = 6;
    }
	return randomNumber;
}
console.log(getRandomInt());