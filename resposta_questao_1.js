var tipo = 0;
var ultimoValor = '';

function validaValores (valores) {

    valores.forEach(function(valor, index){ //loop pra varrer array

		if(!ultimoValor) {
            ultimoValor = valor; //declara a primeira iteraçao do ultimo valor(precisamos de pelo menos dois pra iniciar o script)
            return;
		}
        

        if(tipo==0) { //verifica se a sequencia é crescente
            if ( ultimoValor == valor ) {
                return;
            } else if ( ultimoValor-1 != valor ) { //valida se o valor atual é menor que o valor da iteracao anterior
                tipo = 1; 
            } else if ( ultimoValor+1 != valor ) { //aqui ao contrario, valida se é positivo
                tipo = 2;
            }
        }
        else if(tipo==1){ //senao é decrescente
            if(ultimoValor+1 != valor && ultimoValor != valor) {
                return "Array inconsistente";
            } 
        } else { // ou inconsistente
            if (ultimoValor-1 != valor && ultimoValor != valor) {
                return "Array inconsistente";
            } 
        }
        ultimoValor = valor;
    })

        if(tipo && tipo==1){
            return "Array consistente e crescente";
        } else if (tipo && tipo==2) {
            return "Array consistente e decrescente";
        } else {
            return "Array igual - indefinido";
        }

}
    var arrVal = [1,2,3,4,5,6,7,8];
    console.log(validaValores(arrVal));