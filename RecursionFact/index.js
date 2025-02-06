function findFact(n){
    if(!isNaN(n)) {
        
        return "Invalid Input";
    }
    if(n<0) {
        console.log("Negative Input")
        return -1;
    }
    if(n==1 || n==0) return 1;

    let result = n* findFact(n-1);
     return result;
}

console.log(findFact('5'))