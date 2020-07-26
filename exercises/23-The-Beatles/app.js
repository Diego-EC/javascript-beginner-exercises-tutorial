

//Your code above ^^^
function sing(){
    let song = '';
    for (var i = 1; i <= 4; i++) {
        song = song + "let it be, ";
    }
    
    song = song + "words of wisdom, ";

    for (var i = 1; i <= 5; i++) {
        song = song + "let it be, ";
    }

    song = song + "there will be an answer, let it be";

    return song;
}


console.log(sing());