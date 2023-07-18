const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('form');


//A DESTACAR: Cuando se manda a llamar una funcion desde HTML se utilizan los parentesis
//HTML btnOnClick()
//En cambio, en JS no se colocan los parentesis.


// btn.addEventListener('click' , btnOnClick);

// function btnOnClick(){
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

//FORMULARIOS:
//En un formulario se recarga la pág, no se conserva el dato
//por eso ya no sirve la funcion anterior
//Lo que pasa es que los formularios agarran el últ boton del formulario y lo interpretan como un boton de tipo submit (boton para enviar)
//Para evitar que se recargue se debe: 
//llamar al preventDefault para que no se recargue la pág

form.addEventListener('submit' , sumarInputValues);
function sumarInputValues(){
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

//Para evitar hacer esto último, simplemente se debe especificar en el HTML del button que sea de tippo button, si no lo indicamos, por defecto el formulario lo interpretará al último boton de tipo submit