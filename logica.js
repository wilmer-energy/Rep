let uno = document.getElementById("uno")
let dos = document.getElementById("dos")
let tres = document.getElementById("tres")
let cuatro = document.getElementById("cuatro")
let cinco = document.getElementById("cinco")
let seis = document.getElementById("seis")
let siete = document.getElementById("siete")
let ocho = document.getElementById("ocho")
let nueve = document.getElementById("nueve")
let cero= document.getElementById("cero")
let screen=document.getElementById("result")
let suma=document.getElementById("mas")
let resta=document.getElementById("menos")
let division=document.getElementById("division")
let por=document.getElementById("por")
let clear=document.getElementById("reset")
let equal=document.getElementById("igual")

let op_one=0;
let op_two=0;
let op="+";


uno.onclick= function(e){screen.textContent="1";}
dos.onclick=function(e){screen.textContent="2";}
tres.onclick=function(e){screen.textContent="3";}
cuatro.onclick=function(e){screen.textContent="4";}
cinco.onclick=function(e){screen.textContent="5";}
seis.onclick=function(e){screen.textContent="6";}
siete.onclick=function(e){screen.textContent="7";}
ocho.onclick=function(e){screen.textContent="8";}
nueve.onclick=function(e){screen.textContent="9";}
cero.onclick=function(e){screen.textContent="0";}

suma.onclick= function(e){op_one=screen.textContent;op="+";screen.textContent=""}
resta.onclick= function(e){op_one=screen.textContent;op="-";screen.textContent=""}
division.onclick= function(e){op_one=screen.textContent;op="/";screen.textContent=""}
por.onclick= function(e){op_one=screen.textContent;op="*";screen.textContent=""}
clear.onclick=function(e){screen.textContent="";}
equal.onclick=function(e){op_two=screen.textContent;
    screen.textContent="";
    switch(op) {
        case "+":
            screen.textContent=parseFloat(op_one)+parseFloat(op_two);
        
        break;
        case "-":
            screen.textContent=parseFloat(op_one)-parseFloat(op_two);
        break;
        case "*":
            screen.textContent=op_one*op_two;
        break;
        case "/":
            screen.textContent=op_one/op_two;
        break;
        default:
        console.log("default");
        break;
        } 
}
