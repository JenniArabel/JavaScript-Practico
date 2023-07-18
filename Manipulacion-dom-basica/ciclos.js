let i = 0;
while (i < 5){
    console.log("El valor de la i es: " + i);
    i = i + 1;
}




//EJERCICIO 3 CON FUNCION PROMPT

//MODELO: let suma = prompt("Cuánto es 2 + 2")

let respuesta; 
while (respuesta != 4) {
        let suma = prompt("Cuánto es 2 + 2");
        respuesta = suma;
        console.log("Respuesta incorrecta");
}

console.log("Respuesta correcta");

