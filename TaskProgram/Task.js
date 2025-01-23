let Task_List=["Complete the bew assignment",
  "Attend the class  at 7 PM",
  "Submit the codes",
  "Plan the learning  timeline",
  "Prepare for the next Assignment"];
//removing the task at 0th index
for(let i=0; i<Task_List.length-1;i++){
    Task_List[i]=Task_List[i+1];
    
}
// we will update the length otherwise copy will be saved
Task_List.length= Task_List.length-1
// console.log(Task_List)

//lets add two task at the beginning->>
//for that let me make some space
for(let i= Task_List.length+1;i>=0;i--){
    Task_List[i]= Task_List[i-2]
}
Task_List[0]="complete old assignment";
Task_List[1]="Prepare for weekend exams"
console.log(Task_List)
Task_List[Task_List.length-1]="New task added"
console.log(Task_List)

// Task_List.shift()
// console.log(Task_List);
// Task_List.unshift("complete old assignment", "Prepare for weekend exams")
// console.log(Task_List)