function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
    //your loop here
    var exampleColor;
    //let randomNumber;
    var arrayColoresResultado = [];

    for (var i = 0; i < 10; i++) {
        //randonNumber = getRandomInt(1, 4);
        exampleColor = getColor(getRandomInt(1, 4));
        arrayColoresResultado[i] = exampleColor;
        console.log(exampleColor)
    }
    return arrayColoresResultado;
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

