/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||          SESION 9         |||||||||||||||||||||||||| 
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/*function imprimir1al100(){
    /* Primer segmento
    -valores iniciales a las variables en ese segmento
    Segundo segmento
    -condicion o condiciones agrupadas con op logicos (&&, ||, )
    Tercer segmento
    -operaciones de aumento o disminucion
    
    for (i=1; i<= 100; i++) {
        console.log(i);
        document.getElementById("text1").innerHTML=i;
    }
}
function imprimirmultiplos3(){
    /* imprimir numeros multiplos de 3
   
    for (i=3; i<= 30; i=i+3) {
        console.log(i);
        document.getElementById("text1").innerHTML=i;
    }
}
function sumaImparesPare(){
    /* imprimir suma de numeros impares y la suma de pares menores a 50
    
    impares=0
    pares=0
    for (i=1; i< 50; i=i+2) {
        impares= impares+ i;
        pares=pares + i + 1;
    }
    console.log("impares : "+impares);
    console.log("pares : "+pares);
}
function sumaPares(){
    /* imprimir suma de numeros impares y la suma de pares menores a 50
    
    suma=0
    for (i=1; i< 50; i++) {
        if(i%2==0){
        suma=suma + i;
        }
    }
    console.log(suma);
}



/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||   EJERCICIOS RESUELTOS    |||||||||||||||||||||||||| 
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

/* imprimir la secuencia:
    N=8
    01010101
*/
function f0101(){
    var Num=document.getElementById("text1").value
    N= parseInt(Num)
   
    for( x = 0, i = 1; i <= N ; i++, x++ ){
        console.log(x);
        if(x==1){
            x = -1;
        }
    }
}


/* imprimir la secuencia:
    N=8
    -11-11-11-11
*/
function f_11_11(){
    var Num=document.getElementById("text1").value
    N= parseInt(Num)
   
    for (x = -1, i = 1; i <= N; i++, x+=2){
        console.log(x)
        if (x == 1){
            x = -3
        }
    }
}


/* imprimir la secuencia:
    N=8
    1 2-1-2 1 2-1-2 
*/
function f12_1_2(){
    var Num=document.getElementById("text1").value
    N= parseInt(Num)
    for (x = 1, s = 1, i = 1; i <= N; i++, x++){
        console.log(x*s)
        if(x==2){
            x=0;
            s*=-1;
        }
    }
}


function f345(){
    /* imprimir la secuencia:
    N=8
    3 4 5 3 4 5 3 4
    Usar While o For
    No usar array
    */
    var Num=document.getElementById("text1").value
    N= parseInt(Num)
    
    for (x=3, i=1; i<= N; i++,x++) {
        console.log(x)
        if( x == 5){
            x = 2
        }
    }
}




