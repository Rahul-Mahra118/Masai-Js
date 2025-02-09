
function createBankAccount(initialbalance){
  let totalBalance=initialbalance;
    return {
        deposite(amt){
            totalBalance=totalBalance+amt
           return totalBalance;
        },
        withDraw(amt){
            if(totalBalance>amt)
           { totalBalance=totalBalance-amt
           return totalBalance;}
           else return "insufficient funds"
        },
        getBalance(){
            return totalBalance;
        }
    }

}

let account= createBankAccount(0);

console.log(account.deposite(200))
console.log(account.withDraw(200))
console.log(account.getBalance())

