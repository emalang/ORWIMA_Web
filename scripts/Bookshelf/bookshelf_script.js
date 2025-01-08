const title=document.getElementById("title");
const author=document.getElementById("author");
const category=document.getElementById("category");
const bookList=document.getElementById("book-list");
const btn=document.querySelector(".btn");


btn.addEventListener("click", function(e) {
    e.preventDefault();

    if(title.value == ""  && author.value ==""  &&  category.value == "" ) {
        alert("Fill the form");
    } else{
        const newRow=document.createElement('section')

        const newTitle=document.createElement('div')
        newTitle.innerHTML=title.value
        newRow.appendChild(newTitle);

        const newAuthor=document.createElement('div')
        newAuthor.innerHTML=author.value
        newRow.appendChild(newAuthor);

       
        const newCategory=document.createElement('div')
        newCategory.innerHTML=category.value
        newRow.appendChild(newCategory);

      
        const removeColumn=document.createElement('div')
        const removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        removeBtn.classList.add('remove-btn'); 
        removeColumn.appendChild(removeBtn);
        newRow.appendChild(removeColumn);

        bookList.appendChild(newRow);
        saveToLocalStorage(title.value, author.value, category.value);

        
        removeBtn.addEventListener('click', function () {
            bookList.removeChild(newRow); 
            removeFromLocalStorage(title.value, author.value, category.value);
        });

        title.value = "";
        author.value = "";
        category.value = "";

    }
})

function saveToLocalStorage(title, author, category) {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.push({ title, author, category });
    localStorage.setItem('books', JSON.stringify(books));
}

function loadFromLocalStorage() {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach(book => {
        const newRow = document.createElement('section');
        
        const newTitle = document.createElement('div');
        newTitle.innerHTML = book.title;
        newRow.appendChild(newTitle);
        
        const newAuthor = document.createElement('div');
        newAuthor.innerHTML = book.author;
        newRow.appendChild(newAuthor);
        
        const newCategory = document.createElement('div');
        newCategory.innerHTML = book.category;
        newRow.appendChild(newCategory);
        
        const removeColumn = document.createElement('div');
        const removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        removeBtn.classList.add('remove-btn');
        removeColumn.appendChild(removeBtn);
        newRow.appendChild(removeColumn);

        bookList.appendChild(newRow);

        removeBtn.addEventListener('click', function () {
            bookList.removeChild(newRow);
            removeFromLocalStorage(book.title, book.author, book.category);
        });
    });
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

function removeFromLocalStorage(title, author, category) {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books = books.filter(book => book.title !== title || book.author !== author || book.category !== category);
    localStorage.setItem('books', JSON.stringify(books));
}
