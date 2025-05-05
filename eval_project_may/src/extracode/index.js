let arr= [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com",
    "user5@yahoo.com",
    "user6@gmail.com"
  ]


const domains= arr.map(email=>email.split('@')[1])
const filtered= domains.filter((domain,index,emails)=>emails.indexOf(domain)==index).sort();

console.log(filtered)