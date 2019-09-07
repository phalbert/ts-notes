# Functions

## Arrow functions

Sometimes called lambda functions. Provide concise syntax for anonymous functions

```typescript
let arr = allBooks.filter(book => book.author === 'Herman')
```

### Syntax

```typescript
myBooks.forEach(() => console.log('Done'))
myBooks.forEach(title => console.log(title))
myBooks.forEach((title, idx, arr) => console.log(idx + ' - ' + title))
```

## Default and Optional Parameters

In TypeScript, every parameter is assumed to be required by the function. The number of arguments given to a function has to match the number of parameters the function expects.

```typescript
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

In JavaScript, every parameter is optional, and users may leave them off as they see fit. When they do, their value is `undefined`. We can get this functionality in TypeScript by adding a `?` to the end of parameters we want to be optional. For example, let’s say we want the last name parameter from above to be optional:

```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

Any optional parameters must follow required parameters. Had we wanted to make the first name optional, rather than the last name, we would need to change the order of parameters in the function, putting the first name last in the list.

In TypeScript, we can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes undefined in its place. These are called default-initialized parameters. Let’s take the previous example and default the last name to "Smith".

```typescript
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

Default-initialized parameters that come after all required parameters are treated as optional, and just like optional parameters, can be omitted when calling their respective function.

The default value can also be set to an expression i.e. a function

## Rest Parameters

- Collects a group of parameters into a single array
- Denoted with an ellipsis prefix on **last parameter**

```typescript
function GetBooksReadByCust(name: string, ...bookIDs: number[]){}

let books = GetBooksReadByCust('Leigh', 2, 5)
```

## Function overloads

Declare a function with more than one signature

```typescript
function GetTitles(author: string):string[]
function GetTitles(available: boolean): string[]

function GetTitles(bookProperty: any): string[]{
  if (typeof bookProperty == 'string'){
    // get books by author
  }
  else if(typeof bookProperty == 'boolean'){
    // get books by availability
  }
  return foundTitles
}
```
