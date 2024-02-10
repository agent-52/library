

const addButton = document.querySelector(".addButton");
const dialog = document.querySelector(".bookForm");
const confirmAdd = document.querySelector(".confirmAdd");
const genreChoice = document.querySelector("#genre");
const titleChoice = document.querySelector("#title");
const authorChoice = document.querySelector("#author");
const pageChoice = document.querySelector("#pages");
const errorMessage = document.querySelector(".errorMessage");
const bookstore = document.querySelector(".bookstore")
const pageInput = document.querySelector(".pageinput")
const DeleteButton = document.querySelector(".deleteButton")
const CompleteButton = document.querySelector(".completeButton")

const myLibrary = [];

function Book(title, author, genre, page) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.page = page;
}

let title;
let author;
let genre;
let page;
let bookName;

function addBookToLibrary(){

  title = titleChoice.value;
  author = authorChoice.value;
  genre = genreChoice.value;
  page = pageChoice.value;
  bookName = new Book(title, author, genre, page)
  myLibrary.push(bookName);
  console.log(myLibrary)
  console.log(bookName.author)
  console.log(bookName)

}

function showBook(){

  const div =document.createElement('div');
  div.classList.add("bookcard");
  const h1 = document.createElement('h1')
  h1.textContent = title;
  const div1 = document.createElement('div')
  div1.innerHTML = `<span>author:</span> ${author}`
  const div2 = document.createElement('div')
  div2.innerHTML = `<span>Genre:</span> ${genre}`
  const div3 = document.createElement('div')
  div3.innerHTML = `<span>Current page:</span><input class="pageinput" value="${page}"/>`
  const completeButton = document.createElement('button')
  completeButton.classList.add("completeButton")
  completeButton.textContent = "Mark Complete"

  const deleteButton = document.createElement('button')
  deleteButton.classList.add("deleteButton")
  deleteButton.textContent = "Delete"

  div.appendChild(h1)
  div.appendChild(div1)
  div.appendChild(div2)
  div.appendChild(div3)
  div.appendChild(completeButton)
  div.appendChild(deleteButton)
  

  bookstore.appendChild(div)

  deleteButton.addEventListener("click", () =>{bookstore.removeChild(div)});

  completeButton.addEventListener("click", () =>{
    const completed = document.createElement('div')
    completed.innerHTML = `<span>Status: </span>Completed`
    div.insertBefore(completed, completeButton)
    div.removeChild(completeButton)
  })

};

addButton.addEventListener("click", () =>{
  dialog.showModal();
});

confirmAdd.addEventListener("click", (event) => {
  
  event.preventDefault();
  addBookToLibrary();
  if(title != "" && author != "" && genre != "" && page != ""){
    showBook();
    errorMessage.textContent = ""
    dialog.close();
  }else{
    errorMessage.textContent = "You need to fill all the above details !!"
  }
  

  

});





//function deleteBook()



//if(genreChoice.value != "" && authorChoice.value != "" &&titleChoice.value != "" && pageChoice.value != ""){

