
var string = "{ [ ( ) (() ) { } [ ] ] { } }";
var charsToClose = [];
var error = []


function checkIndent (string){
    caracteres = string.split("");
    caracteres.forEach(function(char) {
            if((char == "(") || (char == "[") || (char == "{")) { //verifica se existe alguma sequencia de abertura
                if(charsToClose){ //caso exista, cria um array com a sequencia
                    charsToClose.push(char);
                }
            }  else if((char == ")") || (char == "]") || (char == "}")) { //verifica se existe alguma sequencia de fechamento
                if(!error.length) { //se possui algum erro de interacoes passadas, nao executa mais
                    if(!charsToClose) { //caso nao exista caracteres para fechar, não faz mais nada
                        error.push("Não é possível fechar");
                        charsToClose.push(char);
                    }
                    var lastKey = charsToClose[charsToClose.length-1];
                    switch(char) { //faz validacao dos caracteres com o ultimo valor da array
                        case ")":
                            if( charsToClose[lastKey] == "("){
                                charsToClose.pop();
                            } else {
                                error.push("Não é possível fechar"); 
                                break;
                            }
                        break;
                        case "]":
                            if( charsToClose[lastKey] == "["){
                                    charsToClose.pop();
                            }  else {
                                error.push("Não é possível fechar"); 
                                break;
                            }
                        break;
                        case "}":
                            if( charsToClose[lastKey] == "{"){
                                    charsToClose.pop();
                            } else {
                                error.push("Não é possível fechar"); 
                                break;
                            }
                        break; 
                    }
                }

            }

    })     
    if (charsToClose.length > 0){
        console.log("Corrija a sintaxe!");
    } else {
        console.log("String com sintaxe correta! "); //
    }
}


console.log(checkIndent(string));