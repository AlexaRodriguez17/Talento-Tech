const libros=`[
    {
        "title": "Sombras de identidad",
        "author": "Brandon Sanderson",
        "year": 2016,
        "category": "Fantasia"
        
    },
    {
        "title": "Inquebrantables",
        "author": "Daniel Habif",
        "year": 2019,
        "category": "Autoayuda" 
    }
]`
const booksListElement = document.getElementById('books-list');

function loadBooks(){ 
libros.forEach((libros) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${libros.title} by ${libros.author} (${libros.year}), ${libros.category}`;
    booksListElement.appendChild(listItem);

});
}
const cadenaJSON2 = JSON.stringify(libros);
console.log("Objeto convertido a cadena JSON:", cadenaJSON2);
const nuevoObject= JSON.parse(cadenaJSON2)
console.log("Cadena JSON convertida a objeto:", nuevoObject)

document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const category = document.getElementById('category').value;

    const newBook = { title, author, year, category };
    addBook(newBook);
    event.target.reset();
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const category = document.getElementById('search-category').value;
    searchBooks(category);
});

document.getElementById('save-button').addEventListener('click', function() {
    const booksJson = JSON.stringify(books, null, 2);
    const blob = new Blob([booksJson], { type: 'application/json' });
    saveAs(blob, 'books.json');
});

function addBook(book) {
    books.push(book);
    updateBooksList();
    saveBooks();
}

function searchBooks(category) {
    const filteredBooks = books.filter(book => book.category === category);
    updateBooksList(filteredBooks);
}

function updateBooksList(booksToShow = books) {
    const booksListElement = document.getElementById('books-list');
    booksListElement.textContent = '';
    booksToShow.forEach(book => {
        booksListElement.textContent += `${book.title} by ${book.author} (${book.year}), ${book.category}\n`;
    });
}


let books = [];

function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

function loadBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    updateBooksList();
}


