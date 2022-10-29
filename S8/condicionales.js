function condicional(){
    var a= parseInt(document.getElementById("text1").value);
    var b= parseInt(document.getElementById("text2").value);
    var c= parseInt(document.getElementById("text3").value);
    var d= parseInt(document.getElementById("text4").value);
    var e= parseInt(document.getElementById("text5").value);

    var ma=a;

    if (b>ma) ma=b;
    if (c>ma) ma=c;
    if (d>ma) ma=d;
    if (e>ma) ma=e;

    document.getElementById("rp").value=ma
    return ma;
}
function condicional2(){
    var a= parseInt(document.getElementById("text1").value);
    var b= parseInt(document.getElementById("text2").value);
    var c= parseInt(document.getElementById("text3").value);
    var d= parseInt(document.getElementById("text4").value);
    var e= parseInt(document.getElementById("text5").value);

    var me=a;
    if (b<me) me=b;
    if (c<me) me=c;
    if (d<me) me=d;
    if (e<me) me=e;

    document.getElementById("rp2").value=me
    return me
}
function condicional3(){
    var a= parseInt(document.getElementById("text1").value);
    var b= parseInt(document.getElementById("text2").value);
    var c= parseInt(document.getElementById("text3").value);
    var d= parseInt(document.getElementById("text4").value);
    var e= parseInt(document.getElementById("text5").value);

    ma1=condicional()
    me1=condicional2()
    
    var me2=ma1;
    if (a<me2 && a>me1) me2=a;
    if (b<me2 && b>me1) me2=b;
    if (c<me2 && c>me1) me2=c;
    if (d<me2 && d>me1) me2=d;
    if (e<me2 && e>me1) me2=e;

    var me3=ma1;
    if (a<me3 && a>me2) me3=a;
    if (b<me3 && b>me2) me3=b;
    if (c<me3 && c>me2) me3=c;
    if (d<me3 && d>me2) me3=d;
    if (e<me3 && e>me2) me3=e;

    document.getElementById("rp3").value=me3
    return me3
}
function condicionDoble(){
    var a= parseInt(document.getElementById("text1").value);
    var b= parseInt(document.getElementById("text2").value);
    var c= parseInt(document.getElementById("text3").value);
    var d= parseInt(document.getElementById("text4").value);
    var e= parseInt(document.getElementById("text5").value);

    if (a > b) {
        if (a > c) {
            if (a > d){
                if (a > e) {
                    ma = a
                }else ma = e
            }else {
                if (d > e) {
                    ma = d
                }else ma = e

            }
        }else {
            if (c > d){
                if ( c > e) {
                    ma = c
                }else ma = e
            }else {
                if ( d > e) {
                    ma = d
                }else ma = e
            }
        }

    }else {
        if (b > c) {
            if ( b > d){
                if ( b > e) {
                    ma = b
                }else ma = e
            }else {
                if ( d > e) {
                    ma = d
                }else ma = e
            }
        } else {
            if (c > d) {
                ma= c
            } else {
                if (d > e) {
                    ma=d
                }else ma=e
            }
        }
    }

    document.getElementById("rp4").value=ma
    return ma
}