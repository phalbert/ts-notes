function GetAllBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true },
        { title: 'A Farewell to Armd', author: 'Ernest Hemmingway', available: false },
        { title: 'Know Why', author: 'Maya Angelou', available: true }
    ];
    return books;
}
function LogFirstAvailable(books) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available:' + firstAvailable);
}
const allBooks = GetAllBooks();
allBooks.push({ title: 'moby Dick', author: 'Herman Melville', available: true });
LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map