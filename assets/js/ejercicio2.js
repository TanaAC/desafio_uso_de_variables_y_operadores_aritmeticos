
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número que sea diferente al primer número y que sea mayor a 0"));

let suma = parseInt(num1)+parseInt(num2);
let resta = parseInt(num1)-parseInt(num2);
let multiplica = parseInt(num1)*parseInt(num2);
let divide = parseInt(num1)/parseInt(num2);
let modulo = parseInt(num1)%parseInt(num2);

document.write("el resultado de sumar "+num1+" + "+num2+" es "+suma+". <br> "); 
document.write("el resultado de restar "+num1+" - "+num2+" es "+resta+". <br> ");
document.write("el resultado de multiplicar "+num1+" * "+num2+" es "+multiplica+". <br> ");
document.write("el resultado de dividir "+num1+" / "+num2+" es "+divide+". <br> ");
document.write("el porcentaje de "+num1+" % "+num2+" es "+modulo+". <br> ");