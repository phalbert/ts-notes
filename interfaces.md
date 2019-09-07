# Interfaces

Contracts that define types. compiler enforces the contract via type checking

Collection of property and method definitions

## Duck typing

> When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck  - *James Whitcomb Riley*

```typescript
interface Duck{
  walk: () => void
  swim: () => void
  quack: () => void
}
  
let probablyADuck = {
  walk: () => console.log('walking like a duck'),
  swim: () => console.log('swim like a duck'),
  quack: () => console.log('quack like a duck')
}

function FlyOverWater(bird: Duck){}

FlyOverWater(probablyADuck)
```
