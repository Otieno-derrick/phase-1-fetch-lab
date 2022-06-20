  const allMain = document.querySelector("main")
  const heading = document.querySelector("h1")

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});

const fetchBooks = () => {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(jsondata => {renderBooks(jsondata)
    });
}

const renderBooks = books => {
  const allMain = document.querySelector('main')
  books.forEach(book => {
    const heading = document.createElement('h1')
    heading.innerHTML = book.name
    allMain.appendChild(heading)
  });
}




