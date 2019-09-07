function GetAllBooks(){
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Armd', author: 'Ernest Hemmingway', available: false, category: Category.Fiction },
        { id: 3, title: 'Know Why', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ]

    return books
}

function LogFirstAvailable(books): void{
    let numberOfBooks: number = books.length
    let firstAvailable: string = ''

    for(let currentBook of books){

        if(currentBook.available){
            firstAvailable = currentBook.title
            break
        }
    }

    console.log('Total Books: ' + numberOfBooks)
    console.log('First Available:' + firstAvailable)
}

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter])

    const allBooks = GetAllBooks()
    const filteredTitles: string[] = []

    for(let currentBook of allBooks){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title)
        }
    }

    return filteredTitles
}

function LogBookTitles(titles: string[]){
    for(let title in titles){
        console.log(title)
    }
}

function GetBookByID(id: number){
    const allBooks = GetAllBooks()
    return allBooks.filter(book => book.id === id)[0]
}

function CreateCustomerID(name: string, id: number): string{
    return name + id
}


//************************* */
// const filteredBooks = GetBookTitlesByCategory(Category.Fiction)
// filteredBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val))

let x: number
x = 5

let IdGenerator: (chars: string, nums: number) => string
IdGenerator = (name: string, id: number) => { return id + name }

let myID = IdGenerator('daniel', 10);
console.log(myID);
