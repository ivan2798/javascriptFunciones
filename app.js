//Función Declarada
function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

//Incocación de función
estoEsUnaFuncion();
estoEsUnaFuncion();


function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    return 10;
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una cadena de Texto";
}

//let valorDeFuncion = unaFuncionQueDevuelveValor();

//console.log(valorDeFuncion);

function saludar(nombre,pais){
    console.log(`Mi nombre es: ${ nombre } y mi vivo en ${ pais }`);
}

saludar("Iván","México")