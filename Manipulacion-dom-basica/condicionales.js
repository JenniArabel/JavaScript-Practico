const tipoSuscripcion = "Basic";

if(tipoSuscripcion == "Free"){
    console.log("Solo puedes tomar cursos gratis")
} else if (tipoSuscripcion == "Basic"){
    console.log("Se puede tomar casi todos los cursos de Platzi durante un mes")
} else if (tipoSuscripcion == "Expert"){
    console.log("Se puede tomar casi todos los cursos de Platzi durante un año")
} else if (tipoSuscripcion == "ExpertDuo"){
    console.log("Pueden 2 personas tomar TODOS los cursos de Platzi durante un año")
} 


//EJERCICIO 3:
//Replica el comportamiento de tu condicional anterior con if, else y else if, 
//pero ahora solo con if (sin else ni else if).

function conseguirTipoSuscripcion(tipoSuscripcion){
    if(tipoSuscripcion == "Free"){
        console.log("Solo puedes tomar cursos gratis")
    } 
    
    if (tipoSuscripcion == "Basic"){
        console.log("Se puede tomar casi todos los cursos de Platzi durante un mes")
    } 
    
    if (tipoSuscripcion == "Expert"){
        console.log("Se puede tomar casi todos los cursos de Platzi durante un año")
    } 
    
    if (tipoSuscripcion == "ExpertDuo"){
        console.log("Pueden 2 personas tomar TODOS los cursos de Platzi durante un año")
    }
    console.warn("Este tipo de suscripción no existe.")
}
//Mandar a llamar:
conseguirTipoSuscripcion("Free")

//Si se manda a llamar una opción que no existe, arrojará undefined.
//Para ello se puede armar una respuesta por defecto en caso de no coincidir con 
//las opciones propuestas.
//Se utilizará un console.warn("Este tipo de suscripción no existe")

//Ejercicio BONUS:
//min 7:41