function serie1While(){
    //serie -1 1-1 1
    N=8
    v=1
    x=-1
    while(v<=N){
        console.log(x);
        x=x*-1
        v++
    }

}


////////////////////////////////////////////////////////////////////////////
///////////////////////////     EJERCICIOS       ///////////////////////////
////////////////////////////////////////////////////////////////////////////


function serie1(){
    //serie 0101
    n=6
    v=1;
    x=0
    let Ar=[];
    
    while(v<=n){
        Ar.push(x);
        console.log(Ar[v-1])
        if(x == 1 ){
            x=-1
        }
        x++
        v++;
    }
    
}

function serie2(){
    //serie -1 1-1 1
    let Arr=[]
    Arr.push(-1)
    N=8
    v=1
    while(v<=N){
        console.log(Arr[v-1]);
        Arr.push(Arr[v-1]*-1)
        v++
    }

}

function serie3(){
    //serie 1 2 -1 -2
    n=6
    v=1;
    x=1
    s=1
    let Ar=[];
    
    while(v<=n){
        Ar.push(x);
        console.log(Ar[v-1]*s)
        if(x == 2 ){
            x=0
            s=s*-1
        }
        x++
        v++;
    }
}

function serie4(){
    //serie 3 4 5 3 4 5
    n=6
    v=1;
    x=3
    let Ar=[];
    
    while(v<=n){
        Ar.push(x);
        console.log(Ar[v-1])
        if(x == 5 ){
            x=2
        }
        x++
        v++;
    }
    
}