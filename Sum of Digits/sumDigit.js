let arr=[12 ,14, 16, 17, 29];

// this is the First approach i thought .
function findDigit(num){
    let rem=0;
    let sum=0;
    while(num>0){
     rem=num%10;
     sum=sum+rem;
     num=Math.floor(num/10);
    }

    return sum;
}
let finalSum=0;
// now runloop over arrays
for(let i=0;i<arr.length;i++){
    
    finalSum=finalSum+findDigit(arr[i]);
}
console.log(finalSum)

// Second approach what i am thinking is to use inbulit methods of js

function getDigits(num){

    return num.toString().split('').reduce((sum,digit)=> sum + +digit,0)
}

const storeResult=arr.reduce((sum,num)=>sum+getDigits(num),0)
console.log(storeResult)