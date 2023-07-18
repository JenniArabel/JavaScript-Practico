function nombreCompleto(name , lastName) {
    return name + ' ' + lastName;
}


function saludo(name, lastName, nickName) {
    const completeName = nombreCompleto (name , lastName);
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName)
}

saludo ("Jennifer", "Arabel", "Jenni")
