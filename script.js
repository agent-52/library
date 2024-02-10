

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

function addBookToLibrary(){
  title = titleChoice.value;
  let bookName = title
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
  div.innerHTML = `<h1>${title}</h1>
  <div><span>author: </span>${author}</div>
        <div><span>Genre:</span> ${genre}</div>
        <div><span>Current page:</span><input type="text" value="${page}" class="pageinput"/></div>
        <button>mark read</button>`;

  bookstore.appendChild(div)

};


addButton.addEventListener("click", () =>{
  dialog.showModal();
});

confirmAdd.addEventListener("click", (event) => {
  
  event.preventDefault();
  addBookToLibrary();
  showBook();

  dialog.close();

});


//if(genreChoice.value != "" && authorChoice.value != "" &&titleChoice.value != "" && pageChoice.value != ""){

