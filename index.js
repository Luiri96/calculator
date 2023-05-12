function init() {
    alert("Welcome to CalculatorLu");

}
let operador1;
let operador2;
let operacion;
// Acontinuacion declaramos las variables a utilizar en la calculadora
let Resultado = document.getElementById("Resultado");
let Resetear = document.getElementById("Resetear");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let division = document.getElementById("division");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let multiplicacion = document.getElementById("multiplicacion");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let resta = document.getElementById("resta");
let cero = document.getElementById("cero");
let punto = document.getElementById("punto");
let igual = document.getElementById("igual");
let suma = document.getElementById("suma");
// Describimos los eventos
uno.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "1";
}
dos.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "2";
}
tres.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "3";
}
cuatro.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "4";
}
cinco.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "5";
}
seis.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "6";
}
siete.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "7";
}
ocho.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "8";
}
nueve.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "9";
}
cero.onclick = function(e){
    Resultado.textContent = Resultado.textContent + "0";
}
Resetear.onclick = function(e){
   Reset();
}
suma.onclick = function(e){
    operador1 = Resultado.textContent;
    operacion= "+"
    limpiar();

 }
 resta.onclick = function(e){
    operador1 = Resultado.textContent;
    operacion= "-"
    limpiar();
    
 }
 multiplicacion.onclick = function(e){
    operador1 = Resultado.textContent;
    operacion= "*"
    limpiar();
    
 }
 division.onclick = function(e){
    operador1 = Resultado.textContent;
    operacion= "/"
    limpiar();
    
 }
 igual.onclick = function(e){
    operador2 = Resultado.textContent;
    resolver();
    
 }
 //funciones
 function limpiar(){
    Resultado.textContent="";

 }
 function Reset(){
    Resultado.textContent = "";
    operador1= 0;
    operador2=0;
    operacion=0;
 }
 function resolver() {
    let res = 0;
    switch(operacion) {
        case "+":
            res = parseFloat(operador1) + parseFloat(operador2);
            break;
        case "-":
                res = parseFloat(operador1) - parseFloat(operador2);
                break;
        case "*":
            res = parseFloat(operador1) * parseFloat(operador2);
            break;
        case "/":
            res = parseFloat(operador1) / parseFloat(operador2);
            break;    
    }
    Reset();
    Resultado.textContent = res;
 }

