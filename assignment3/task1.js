function findFiboSum(k){
    let a,b,c;
    a=0;
    b=1;
    c=a+b;
    for(let i=2;i<k+2;i++){
        a=b;
        b=c;
        c=a+b;
    }
    console.log(c-1);
}
findFiboSum(5)