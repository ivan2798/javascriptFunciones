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

function saludar(nombre="...",pais="..."){
    console.log(`Mi nombre es: ${ nombre } y mi vivo en ${ pais }`);
}

saludar("Iván","México");
saludar();

//funciones declaradas VS funciones expresadas

funcionDeclarada();

function funcionDeclarada(){
    console.log("Esto puede clararse en cualquier parte de nuestro código,incluso antes de que la función sea declarada");
}

//funcionDeclarada();

//funcion anónima
funcionExpresada();
const funcionExpresada = function(){
      console.log("Esta es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su declaración en JS nos dirá");
}

funcionExpresada();