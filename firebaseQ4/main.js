const Base_Url =
  "https://librarymanagementsystem-b6d52-default-rtdb.asia-southeast1.firebasedatabase.app";
const bookContainer = document.getElementById("bookList");
async function addData(event) {
  event.preventDefault();
  try {
    let response;
    const bookData = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        publishedYear: document.getElementById("publishedYear").value,
        isAvailable: document.getElementById("isAvailable").value,
      };
       response = await fetch(`${Base_Url}/books.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
  } catch (error) {
    
  }finally{
    document.getElementById("title").value=''
    document.getElementById("author").value=''
  document.getElementById("genre").value=''
     document.getElementById("publishedYear").value=''
  document.getElementById("isAvailable").value=''
  }
  
}
// fetch data

async function fetchData() {
  const response = await fetch(`${Base_Url}/books.json`);
  let data = await response.json();
  const booksArray = Object.entries(data).map(([id, book]) => ({
    id,
    ...book,
  }));
  return booksArray
}
fetchData();

async function displayData() {
let booksArray=await fetchData()
  bookContainer.innerHTML = "";
 
 booksArray.forEach(book => {
    const bookrow = document.createElement("tr");
    bookrow.innerHTML = `
        <td>${book.title.toUpperCase()}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.publishedYear}</td>
      <td>${book.isAvailable}</td>
      <td>
        <button onclick="editBook('${book.id}')">Update</button>
      </td>
      `;
    bookContainer.appendChild(bookrow)
 });
}

async function editBook(id){
    let booksArray= await fetchData();
    let data = booksArray.find(book => book.id === id);
    if(data){
        document.getElementById("id").value=data.id;
       document.getElementById("title").value=data.title
       document.getElementById("author").value=data.author
      document.getElementById("genre").value=data.genre
       document.getElementById("publishedYear").value=data.publishedYear
      document.getElementById("isAvailable").value=data.isAvailable ;
    }
    

}



