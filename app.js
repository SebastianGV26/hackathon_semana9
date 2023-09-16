/*EJERCICIO 1*/
// let numero = prompt("Ingrese un número");
// let factorial = 1;
// if(Number.parseInt(numero) > 0){
//     for(let i = numero; i >= 1; i--){
//         factorial = factorial * i;
//     }
//     alert("El factorial de " + numero + " es igual a = " + factorial);
// }else{
//     alert("Ingrese un número mayor a 0, factorial de 0 = 1 (propiedad vacío)");
// }
/*EJERCICIO 2*/
// const calificaciones = [80, 70, 88, 95, 68];
// let acum = 0;
// let promedio;
// for(let i = 0; i < calificaciones.length; i++){
//     acum = (acum + calificaciones[i]);
//     promedio = acum /calificaciones.length
// }
// alert("El promedio del salon es: " + promedio);
// if(Number.parseFloat(promedio) < 60){
//     alert("El nivel del salon es F");
// }else if(Number.parseFloat(promedio) < 70){
//     alert("El nivel del salon es D");
// }else if(Number.parseFloat(promedio) < 80){
//     alert("El nivel del salon es C");
// }else if(Number.parseFloat(promedio) < 90){
//     alert("El nivel del salon es B");
// }else if(Number.parseFloat(promedio) < 100){
//     alert("El nivel del salon es A");
// }
/*EJERCICIO 3*/
// let pares, impares;
// for(let i = 1; i <= 15; i++){
//     if(i % 2 == 0){
//         pares = i;
//         console.log("El número " + pares + " es par");
//     }else{
//         impares = i;
//         console.log("El número " + impares + " es impar");
//     }
// }
// alert("Los resultados se mostrarán por consola, por favor, abrirla");
/*EJERCICIO 4*/
// let mult3, mult5, multAmbos;
// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         multAmbos = i;
//         console.log(multAmbos + " FizzBuzz");
//     }else if(i % 3 == 0){
//         mult3 = i;
//         console.log(mult3 + " Fizz");
//     }else if(i % 5 == 0){
//         mult5 = i;
//         console.log(mult5 + " Buzz");
//     }else{
//         console.log(i);
//     }
// }
// alert("Los resultados se mostrarán por consola, por favor, abrirla");
/*EJERCICIO 5*/
// alert("Los resultados se mostrarán por consola, por favor, abrirla");
// const array = [3, 4, 2, 7, 5];
// console.log(array);
// const reverse = array.reverse();
// console.log(reverse);
/*EJERCICIO 6*/
// let cadena = prompt("Ingrese palabra a invertir");
// let cadenarevertida = "";
// for(var i = cadena.length-1; i>=0; i--)
// {
//       cadenarevertida += cadena[i];
// }
// console.log(cadenarevertida);
/*EJERCICIO 7*/
// let base = prompt("Ingrese número base");
// let expo = prompt("Ingrese número exponente");
// let mult = 1;
// for(let i = 0; i < Number.parseInt(expo); i++){
//     mult = mult * Number.parseInt(base);
// }
// alert("La base " + base + " con el exponente " + expo + " (" + base + "^" + expo + ") " + "da como resultado = " + Number.parseInt(mult));
/*EJERCICIO 8*/
// const array = [26, 15, 5, 26, 21];
// let suma = 0;
// for(let i = 0; i < array.length; i++){
//     suma = suma + array[i];
// }
// alert("El suma del arreglo es: " + suma);
/*EJERCICIO 9*/
// const array = [16, 25, 5, 46, 11];
// let mayor = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i] > mayor){
//         mayor = array[i];
//     }
// }
// alert("Arreglo: [" + array + "]");
// alert("El número mayor del arreglo es: " + mayor);
/*EJERCICIO 10*/
// const array = [16, 25, 6, 46, 11];
// let pares;
// for(let i = 0; i < array.length; i++){
//     let num = array[i];
//     if(num % 2 == 0){
//         pares = array[i];
//         alert(pares);
//     }
// }
/*EJERCICIO 11*/
alert("Los resultados se mostrarán por consola, por favor, abrirla");
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of the Hunger Games',
        readingStatus: false,
    }
]
for (let i = 0; i < library.length; i++){
    const {readingStatus} = library[i];
    if(readingStatus == true){
        console.log(library[i]);
    }
}