/*
Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva
 con todos sus caracteres en mayúsculas y separados por espacios.
 Ejemplo: Para "Ana" devolverá "A N A".
*/

function myfunction(str) {
    return str.toUpperCase().split("").join(" ")
}

console.log(myfunction("ana"))


/**
 * Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva 
el número de palabras que tiene el nombre. Ejemplo:
Para "Antonio Alberto Jesús" devolverá 3.
 */

function cuentaPalabras(nombre) {
    return nombre.split(" ").length
}

console.log(cuentaPalabras("Antonio Alberto Jesús"))

/**
 * Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

 */

function cuenteNumeroLetras(frase, letra) {
    let numeroDeLetras = 0
    if (frase.trim().length <= 0) {
        return "Tienes que escribir una frase valdia"
    }
    else if (letra.trim().length === 0 || letra.trim().length > 1 ) {
        return "Tienes que escribir una letra valdia"
    } else {
        numeroDeLetras = frase.trim().toLowerCase().split("").filter(it => it === letra.trim().toLowerCase()).length
        return `La letra "${letra}" aparece ${numeroDeLetras} vece/s en la frase "${frase}"` 
    }

}

console.log(cuenteNumeroLetras("Me gusta y javascript", "m"))