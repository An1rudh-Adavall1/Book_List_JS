function Book (title, auther, isbn){
    this.title  =title;
    this.auther = auther;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookToList = function(book){

    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td> ${book.title}</td>
    <td> ${book.auther}</td>
    <td> ${book.isbn}</td>
    <td> <a href = "#" class = "delete">X</a> </td>
    `;
    
    list.appendChild(row);
}


// const del = document.querySelector(".delete");
// del.addEventListener("click", clearBook);

// function clearBook(){

//     const par = del.parentElement.parentElement;
//     console.log(par);
// }



UI.prototype.showAlert =  function(message,className){

    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form =  document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(function(){
        document.querySelector(".alert").remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target){
    if(target.className ==="delete"){

        target.parentElement.parentElement.remove();
    }
}


UI.prototype.clearList =  function(){

    document.getElementById("title").value = "";
    document.getElementById("auther").value = "";
    document.getElementById("isbn").value = ""; 
}



document.getElementById("book-form").addEventListener("submit", function(e){

        const title = document.getElementById("title").value,
             author = document.getElementById("auther").value,
               isbn = document.getElementById("isbn").value;

const book = new Book(title,author,isbn);
const ui = new UI();
    if (title === "" || author === "" || isbn === "") {

        ui.showAlert("Please fill all the fields", "error");

    } else {

       
        ui.addBookToList(book);

        ui.showAlert("Book added successfully", "success");

        ui.clearList();

    }

e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book Deleted","success");

e.preventDefault()
})