let Todo_List = [
  "Complete the bew assignment",
  "Attend the class  at 7 PM",
  "Submit the codes",
  "Plan the learning  timeline",
  "Prepare for the next Assignment",
];

for (let i = Todo_List.length; i >= 0; i--) {
  Todo_List[i] = Todo_List[i - 1];
}
Todo_List[0] = "complete old assignment";

console.log(Todo_List);

//removing from last 
Todo_List.length=Todo_List.length-1
console.log(Todo_List)
