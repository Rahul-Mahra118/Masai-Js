let studentScore=[45,85,48,14,36,96,87,89,78,65];
for(let i=0;i<studentScore.length;i++){
    if(studentScore[i]<40){
        studentScore[i]+=20;
    }
   if(studentScore[i]>90){
        studentScore[i]=90
    }
}
console.log(studentScore)
let count=0
for(let i=0; i<studentScore.length;i++){
    if(studentScore[i]>=50){
        count++
    }
}
console.log(count)
console.log(studentScore)