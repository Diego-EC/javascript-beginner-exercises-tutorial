function fizzBuzz() {  
    // Your code here
    var resultado = '';

    // bucle
    for (var i = 1; i <= 100; i++) {
        // si es multiplo de 3
        if (calcularSiMultiplo(i, 3) == true){
            resultado = "Fizz";
        } 
        // si es multiplo de 5
        if (calcularSiMultiplo(i, 5) == true){
            resultado = resultado + "Buzz";
        }
        // Si no es ninguna de las dos cosas:
        if(resultado == ''){
            resultado = i;
        }
        console.log(resultado);
        resultado = '';
    }
}

fizzBuzz();


function calcularSiMultiplo(numero, multiploDe){
    var resto = numero % multiploDe;  
	if (resto == 0){
        return true;
    } else {
        return false;
    }
}

/*Notas: 
https://www.lawebdelprogramador.com/codigo/JavaScript/3054-Calcular-los-multiplos-de-3-y-5.html



*/