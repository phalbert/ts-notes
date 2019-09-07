function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Armd', author: 'Ernest Hemmingway', available: false, category: Category.Fiction },
        { id: 3, title: 'Know Why', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title in titles) {
        console.log(title);
    }
}
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
//************************* */
// const filteredBooks = GetBookTitlesByCategory(Category.Fiction)
// filteredBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val))
let x;
x = 5;
let IdGenerator;
IdGenerator = (name, id) => { return id + name; };
let myID = IdGenerator('daniel', 10);
console.log(myID);
//# sourceMappingURL=app.js.map