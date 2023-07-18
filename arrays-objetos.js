// 2) Crea una función que pueda recibir cualquier array como parámetro 
// e imprima su primer elemento.

function imprimirPrimerElementoArray (arreglo){
    console.log(arreglo[0])
}
//en los arrays se indica la posición del elemento por su índice, que comienza desde 0. 
//Siguiente, definiré el array y sus elementos:
imprimirPrimerElementoArray(['Jennifer', 'Katherina', 'Arabel'])
//Como resultado mostrará 'Jennifer'.


//En caso de ser el primer elemento de un objeto:
function imprimirPrimerElementoArray (obj){
    console.log(obj.nombrePrimerElemento)
}


//3) Crea una función que pueda recibir cualquier array como parámetro 
//e imprima todos sus elementos uno por uno 
//(no se vale imprimir el array completo).

function imprimirElementoPorElemento(arr){
    for(let i=0, i < arr.length, i++) {
        console.log(arr[i])
    }
}
//No se puede porner i<=arr.length porque trataría de imprimer 4 veces, y
//no hay una 4ta posición, sino que hay 3. Lo mismo sucede con los objetos. 
//SIEMPRE indicar menor (<) a la cantidad de elementos.

//4) Crea una función que pueda recibir cualquier objeto como parámetro 
//e imprima todos sus elementos uno por uno 
//(no se vale imprimir el objeto completo).

//1ro debemos tener un objeto creado:
const obj ={
    nombre: 'jennifer',
    apellido: 'arabel',
    edad: 23,
    comidaFavorita: ['pizza', 'hamburguesa'],
}
//Para acceder a cada elemento, se accede por su nombre:
obj.nombre
obj.edad

//Pero para imprimir cada elemento por separado, es distinto a como se hace con los arrays.
//Para ello se debe usar una propiedad especial de js. 
//Object.values(nombreObjeto) 
Object.values(obj)
//que devuelve un arreglo con cada uno de los valores del objeto.
//Luego, se crea la función y dentro se crea una variable que se llame arr
//y luego esa misma variable es la que se va a ejecutar en un ciclo for.

function imprimirElementoPorElementoObjeto(obj){
    const arr = Object.values(obj);
    for(let i=0, i < arr.length, i++) {
        console.log(arr[i])
    }
}
//mandar a imprimir los elementos:
imprimirElementoPorElementoObjeto(obj)
//imprimirá elemento por elemento.

