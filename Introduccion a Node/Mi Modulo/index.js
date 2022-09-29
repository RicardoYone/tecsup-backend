
// const isOdd=require("is-odd-num")
import isOdd from "is-odd-num";
console.log("Yo soy el proyecto")

const resultado=isOdd(30);
console.log(resultado);
//Dependiendo del resultado si es falso imprimir que el numero es PAR, caso contrario imprimir que el numero es IMPAR

if(resultado){
    console.log('Es IMPAR');
}else{
    console.log("Es PAR");
}



const categoria =LECHE;

switch(categoria){
    case "LECHE":console.log('TENER CUIDADO CON LA LACTOSA');break;
    case "CARNE":console.log('NO ES VEGANO');break;
    case "VEGANO":console.log('NO APTO PARA CARNIVOROS');break;
    case "DIVERSION":console.log('NO APTO PARA COMER');break;
}

// //Tengo la siguiente informacion del producto
// const categoria='LECHE'
// //Si la categoria es LEChe imprimir que tengan cuidado con la lactosa
// console.log('TENER CUIDADO CON LA LACTOSA')
// //Si la categoria es CARNE
// console.log('NO ES VEGANO')
// //Si la cateogira es VEGANO
// console.log('NO APTO PARA CARNIVOROS')
// //Si la cateogira es IDVERSION
// console.log('NO APTO PARA COMER')









