// https://jsonplaceholder.typicode.com/todos
const paginationContainer=document.getElementById('pagination')
const todocontainer= document.getElementById('todoList');
let currentpage=1;
let todosPerpage=10;
let todos;
async function fetchTodo(){
  let response = await fetch('https://jsonplaceholder.typicode.com/todos');
   todos= await response.json();
//   console.log(todos)
   displayTodo()
   setUpPagination()
}

async function displayTodo() {
    todocontainer.innerHTML=''
    let begin= (currentpage-1)*todosPerpage;
    let end= begin+todosPerpage;
    let paginatedPage= todos.slice(begin,end);
    paginatedPage.forEach(todo => {
        const todoDiv= document.createElement('div');
         todoDiv.innerHTML=
         `
         <p>${todo.title}</p>
         <input type="checkbox" ${todo.completed ? 'checked' : ''}>
         `
         todocontainer.appendChild(todoDiv) 
    });
}
function setUpPagination(){
    paginationContainer.innerHTML = '';
    let totalPg= Math.ceil(todos.length/todosPerpage);
    

    //const previous button
    const prevBtn= document.createElement('button');
    prevBtn.innerText='Previous';
    prevBtn.disabled=currentpage==1;

    prevBtn.addEventListener('click',()=>{
        if(currentpage>1){
            currentpage--;
            displayTodo();
            setUpPagination()
        }
    })
    paginationContainer.appendChild(prevBtn)

    const pageInfo= document.createElement('span');
    pageInfo.innerText=` Page ${currentpage} of ${totalPg} `
    paginationContainer.appendChild(pageInfo);

    //const next button
    const nextBtn= document.createElement('button');
    nextBtn.innerText='Next';
    nextBtn.disabled=currentpage===totalPg;

    nextBtn.addEventListener('click',()=>{
        if(currentpage<totalPg){
            currentpage++;
            displayTodo()
            setUpPagination()
        }
    })
    paginationContainer.appendChild(nextBtn)
}