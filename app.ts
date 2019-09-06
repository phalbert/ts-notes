function GetAllBooks(){
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Armd', author: 'Ernest Hemmingway', available: false, category: Category.Fiction },
        { title: 'Know Why', author: 'Maya Angelou', available: true, category: Category.Poetry },
        {title: 'moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
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
const filteredBooks = GetBookTitlesByCategory(Category.Poetry)
LogBookTitles(filteredBooks)