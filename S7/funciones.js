/************   EJEMPLOS DESARROLLADOS POR EL PROFESOR *********** 

function Variables(){
    var a=5;
    let x=10;
    var a="10";
    //let x="20";
    //const a1=20;
    const a1="20";
    document.getElementById("Var1").innerHTML=a;
    document.getElementById("Let1").innerHTML=x;
    document.getElementById("Const1").innerHTML=a1;
    //a1=200;
    x=200;
}
function Variables2(){
    var a=5;
    var a="10000";
    let x="20";
    //const a1=20;
    const a1="20";
    document.getElementById("Var1").innerHTML=a;
    document.getElementById("Let1").innerHTML=x;
    document.getElementById("Const1").innerHTML=a1;
    a1=200;
    x=200;
}

function ValoresB(){
    var a,b,c;
    a=10
    b=100
    c=a>b
    document.getElementById("Var1").innerHTML=c;
    c=a+b
    document.getElementById("Var1").innerHTML=c;
}
function ValoresL(){
    let a,b,c;
    a=10
    b=100
    c=a>b
    document.getElementById("Var1").innerHTML=c;
    c=a+b
    {
        let c = 200
        document.getElementById("Var1").innerHTML=c;
    }
}

function Arreglos(){
    const SitE =["Especial", "Regular", "Excelente"];
    SitE[0]="EspecialX"
    SitE.push("No Especificado")
    document.getElementById("Var1").innerHTML=SitE[0];
    document.getElementById("Let1").innerHTML=SitE[1];
    document.getElementById("Const1").innerHTML=SitE[3]
}


/**********************  EJERCICIOS RESUELTOS  ********************/

function MayorMenor(){
    N1=parseInt(document.getElementById("eje1N1").value)
    N2=parseInt(document.getElementById("eje1N2").value)
    N3=parseInt(document.getElementById("eje1N3").value)
    N4=parseInt(document.getElementById("eje1N4").value)
    N5=parseInt(document.getElementById("eje1N5").value)

    let ma=N1
    if (N2>ma){ma=N2}
    if (N3>ma){ma=N3}
    if (N4>ma){ma=N4}
    if (N5>ma){ma=N5}
    
    let me=N1
    if (N2<me){me=N2}
    if (N3<me){me=N3}
    if (N4<me){me=N4}
    if (N5<me){me=N5}

    const arr=[]
    if (N1>me && N1<ma){arr.push(N1)}
    if (N2>me && N2<ma){arr.push(N2)}
    if (N3>me && N3<ma){arr.push(N3)}
    if (N4>me && N4<ma){arr.push(N4)}
    if (N5>me && N5<ma){arr.push(N5)}

    me2=arr[0]
    if (arr[1]<me2){me2=arr[1]}
    if (arr[2]<me2){me2=arr[2]}

    ma2=arr[0]
    if (arr[1]>ma2){ma2=arr[1]}
    if (arr[2]>ma2){ma2=arr[2]}

    me3=ma2
    if (arr[0]<ma2 && arr[0]>me2 ){me3=arr[0]}
    if (arr[1]<ma2 && arr[1]>me2 ){me3=arr[1]}
    if (arr[2]<ma2 && arr[2]>me2 ){me3=arr[2]}

    document.getElementById("text1").innerHTML="el mayor es: "+ma+ ", el menor es: "+me+", el tercer menor es: "+me3
}


function sumaImpares(){
    const x=document.getElementById("eje2").value.split("")
    var sumaImpar = 0
    if (x.length != 4){
        window.alert("El numero no esta en el rango indicado")
        document.getElementById("eje2").value=""
    } else {
            for (let i=0; i< x.length; i++){
                if (0 < x[i]%2){
                  sumaImpar += parseInt(x[i])
                 }
            }
            document.getElementById("text2").innerHTML= sumaImpar
        }
}


function convertir() {
    monto=document.getElementById("eje3").value

    dolares=monto/4
    euros=monto/4.1
    document.getElementById("text3").innerHTML= "Equivalencia en dolares: $"+dolares
    document.getElementById("text3-1").innerHTML= "Equivalencia en euros: €"+euros
}

function sumaNoPrimoImpar() {
    
    const numero=document.getElementById("numero5").value.split("");

    var sumaNoPrimos = 0
    
    for (let i = 0; i < numero.length; i++){
        
        if   (  0 == numero[i] || 
                1 == numero[i] || 
                9 == numero[i] ) {
            sumaNoPrimos += parseInt(numero[i]);
        }
    }

    document.getElementById("text4").innerHTML="La suma de digitos no primos impares es: "+sumaNoPrimos;
}