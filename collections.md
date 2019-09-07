# Collections

## Enums

```typescript
enum Category {Bio, Poet, Fiction }

let fav: Category = Category.Bio

Category[fav] // 'Bio'
```

## Arrays

```typescript
//array declared with annotations
let strArray1: string[] = ['here', 'are', 'strings']

//declaration using generics syntax
let strArray2: Array<string> = ['here', 'are', 'strings']
```

## Tuples

- Arrays where types for first few elements are specified.
- Types do not have to be the same
- Additional elements can be any type

```typescript
let myTuple: [number, string] = [25, 'truck']
let firstElement = myTuple[0] //25

//other elements can have numbers or strings
myTuple[2] = 100 //100
myTuple[2] = 'this works' // 'this works'
```
