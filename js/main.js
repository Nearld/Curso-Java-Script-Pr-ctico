function saludo(){
    alert("Bienvenido :v");
}

function circulo(){
var figura = document.getElementById("figura");
figura.classList.toggle("circulo");
}

function rectangulo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}

function moveTop(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("top")
}
function moveLeft(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Left")
}

function moveRight(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Right")
}

function moveBottom(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Bottom")
}

function moveDiagonal(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Diagonal")
}

function uploadimg(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Imagen")
}

function crearRombo(){
    var figura =document.querySelector("#figura");
    figura.classList.toggle("rombo")
}


//ALGORITMOS

function suma(){
    var A=0;
    var B=0;
    var suma=0;

    alert("Algoritmo que suma dos valores ingresados por el usuario");
    
    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    suma = A+B;

    alert ("El resultado de la suma es:" + suma);

}

function opBasicas(){
    var A=0;
    var B=0;
    var suma=0;
    var resta=0;
    var multipli=0;
    var divi=0;

    alert(" Resultado de operaciones básicas");

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    suma= A+B;
    resta= A-B;
    multipli =A*B;
    divi= A/B;
    
    alert("Operaciones básicas: La suma de valores es: " + suma+". La resta es: "+resta+
    ". La multiplicación es: "+multipli+". La division es: "+divi 
);}

function promedio(){
    var nota1=0;
    var nota2=0;
    var nota3=0;
    var nota4=0;
    var nota5=0;
    var nota6=0;
    var nota7=0;
    var promedio=0;

    alert(" Promedio de notas");
nota1 = parseInt (prompt("Ingrese la primera nota"));
nota2 = parseInt (prompt("Ingrese la segunda nota"));
nota3 = parseInt (prompt("Ingrese la tercera nota"));
nota4 = parseInt (prompt("Ingrese la cuarta nota"));
nota5 = parseInt (prompt("Ingrese la quinta nota"));
nota6 = parseInt (prompt("Ingrese la sexta nota"));
nota7 = parseInt (prompt("Ingrese la séptima nota"));

promedio=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;
alert("Su nota final es de: "+promedio)
}
    
function triangulo(){
    var base=0;
    var altura=0;
    var area=0;
    
    base = parseInt(prompt("Ingrese una base"));
    altura= parseInt(prompt("Ingrese la altura"))

    area=(base*altura)/2;

    alert("El área del triángulo es: "+area);

}

function inversion(){
    var tiempo;
    var capital;
    var ganancia;
    var porcentaje;
    var gananciaTotal;

    tiempo = parseInt(prompt("Ingrese los años que desea invertir"));
    capital = parseInt(prompt("Ingrese el capital a invertir"));
    porcentaje=(capital*17)/100
    // porcentaje= (0,017*12);

    ganancia = (capital*porcentaje)*tiempo;
    gananciaTotal=ganancia+capital ;


    alert("El total que ganará será de: "+gananciaTotal+ " en un total de: "+tiempo+"año/s");
    

}

function descuento(){


    var pago=4500;
    var kilos=0;
    var total=0;
    var suma=0;
    var descuento=0;

    alert("Fruteria | descuento");

    kilos = parseInt(prompt("Ingrese el kilo que desea llevar"));

    if (kilos <= 2) {
        suma= (pago * kilos);
        descuento = 0;
        total= suma - descuento;
        alert("El descuento es de 0% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    } if ((kilos >= 3) && (kilos <= 5)){
        suma= (pago * kilos);
        descuento = (suma *10)/100;
        total= suma - descuento;
        alert("El descuento es de 10% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    } if ((kilos >= 6) && (kilos <= 10)){
        suma= (pago * kilos);
        descuento = (suma *15)/100;
        total= suma - descuento;
        alert("El descuento es de 15% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    }if (kilos > 10){
        descuento= ((pago * kilos) * 20)/100;
        suma= (pago * kilos);
        descuento = (suma *20)/100;
        total= suma - descuento;
        alert("El descuento es de 20% \n El total es: " + total +" \n Su descuento fue de: " + descuento);
    }


}



// prompt tiempo
// prompt capital

// 0,017*12=0.204
// ganancia= (capital*0.204)tiempo;
// gananciatotal=capital+ganancia



// TAREA
//1. Realizar un algoritmo que capture dos valores y nos arroje el resultado de la suma, resta, multiplicación y división de esos dos valores
//ALGORITMO PROMEDIO
// El colegio ABC requiere un sistema que le permita calcular el promedio de un alumno que tiene 7 calificaciones y 
//estas se dan en una
//escala de 1 a 10 en donde aprueba si el promedio mayor igual a 6.2
//Realizar un algoritmo que calcule el área de un triángulo ingresando su base y su altura (BXH/2)
// Un individuo desea realizar su capital en un banco y quiere saber cuánto dinero ganará en N número de años
//teniendo en cuenta que el banco paga un interés del 1,7% mensual (  Aunque el porcentaje es porcentaje es mensual El resultado se presenta en años)
// Una fruteria vende manzanas  a 4500  el Kilo realice un algoritmo que permita saber al vendedor cuánto debe pagar un cliente
//teniendo en cuenta que la frutería tiene la siguiente tabla de descuentos