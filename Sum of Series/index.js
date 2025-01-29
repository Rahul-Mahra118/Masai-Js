let N=3;
let X=2;

function findSumOfSeries(N,X){
    if(N<=0||X<=0){
        console.log("-1")
    }
    let storeResult=0;
    for(let i=1;i<N;i++){
        storeResult=storeResult+X**i;
        console.log(storeResult)

    }
  console.log(storeResult+1);
}
findSumOfSeries(N,X)