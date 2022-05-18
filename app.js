// declaro variables
let numero 
let acumulador = 0
let numPar = 0
// *************



// defino WHILE para la suma de los numeros ingresados
while (numero != 0) {
    numero = Number(prompt('Ingrese un numero (con cero corta el ciclo)'))
    acumulador = acumulador + numero     
}
console.log('la suma de los numeros ingresados es ' + acumulador);
// *************



// defino FOR para contar cuantos numeros pares se ingresaron
for (let i = 0; i <= 5; i++ ) {
    numero = Number(prompt('Ingrese un numero'))

    if (numero % 2 == 0) {
        numPar = numPar + 1
    }
}
console.log('se ingresaron ' + numPar + ' numeros pares');
// *************
