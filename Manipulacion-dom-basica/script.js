//LEER HTML CON JAVASCRIPT
const h1 = document.querySelector('h1');
const p = document.querySelector('p'); //primer p
const allp = document.querySelectorAll('p'); //todos los p
const parrafito = document.querySelector('.parrafito'); //o o document.getElementByClassName('parrafito');
const pid = document.querySelector('#pid'); //o document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);
console.log(input.value);
console.log(
    {
        h1,
        p,
        parrafito,
        pid,
        input,
    }
);

//ESCRIBIR HTML CON JAVASCRIPT
//Cambier el contenido del h1
h1.innerHTML = 'PATITO <br> Feo'; //Entendiendo que hay cód html
h1.innerText = 'PATITO <br> Feo'; //Entendiendo todo como texto


//Obtener un atributo y cambiarlo.
h1.getAttribute('class');
h1.setAttribute('class', 'rojo');

//Agregar una clase
h1.classList.add('morado');

//Eliminar una clase
h1.classList.remove('morado');

//Modificar el value del input
input.value = "67890";

//Crear un elemento HTML
//ej. una imagen
const img = document.createElement('img');
img.setAttribute('src', 'https://juegaargentina.com.ar/media/banderas_iconos/arg.png');
//hasta el momento se ha creado la img, se le añadió/cambió el atributo src, pero todavía no se visualiza
//para visualizar, se debe insertar el elemento creado dentro de uno ya existente, ej.
pid.append(img);

//Borrar lo escrito en el p con id (pid)
pid.innerHTML="";
pid.appendChild(img);