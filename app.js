// // declaro variables
// let numero 
// let acumulador = 0
// let numPar = 0
// // *************



// // defino WHILE para la suma de los numeros ingresados
// while (numero != 0) {
//     numero = Number(prompt('Ingrese un numero (con cero corta el ciclo)'))
//     acumulador = acumulador + numero     
// }
// console.log('la suma de los numeros ingresados es ' + acumulador);
// // *************



// // defino FOR para contar cuantos numeros pares se ingresaron
// for (let i = 0; i <= 5; i++ ) {
//     numero = Number(prompt('Ingrese un numero'))

//     if (numero % 2 == 0) {
//         numPar = numPar + 1
//     }
// }
// console.log('se ingresaron ' + numPar + ' numeros pares');
// // *************


// SIMULADOR

let total = 0

divisa1 = ['dolar', 200]
divisa2 = ['euro', 210]

function Cantidad(cant) {
    return cant = Number(prompt('Ingrese la cantidad que desea comprar.'))
}

const carrito = []

function SeguirComprando () {
    opcion = prompt('Ingrese la moneda que desea comprar: Dolar o Euro.').toLowerCase()
    switch (opcion) {
        case 'dolar':
            cant = Cantidad()
            total = (cant * divisa1[1]) + total
            carrito.push('Selecciono ' + cant + ' dolar/dolares')
            break;
        case 'euro':
            cant = Cantidad()
            total = (cant * divisa2[1]) + total
            carrito.push('Selecciono ' + cant + ' euro/euros')
            break;        
        default:
            console.log('Por favor ingrese una opcion correcta..');
            break;
        }

    if (confirm('Desea seguir comprando?')) {   
        SeguirComprando()
    } else {
        console.log('Finalizo compra.');
        console.log(carrito);
    }     
}

SeguirComprando()

if (total != 0) {
    console.log('El total a pagar es de ' + total + ' pesos');    
}

