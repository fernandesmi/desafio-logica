var arrVal = [1,2,3,4,5,5,3,2,7,8];
var digito = '';


function retornaDuplicado (valores){
    var arrRepetidos = [];

    valores.forEach(function(valor, i) {
        valores.forEach(function(novovalor, index) {
            if(index==i) {
                return;
            }

            if(valor == novovalor) { //ve se o valor inicial é igual ao valor da iteraçao
                arrRepetidos.push(valor); //adiciona o duplicado ao array de duplicados
                valores.forEach(function(ultimovalor, atualI) { //valida o valor duplicado com todos os valores
                    if(novovalor==ultimovalor) {
                       valores.splice(atualI, 1); //remove o duplicado do array
                    }
                })
            }


        })
    });
    return arrRepetidos;
}

console.log(retornaDuplicado(arrVal));