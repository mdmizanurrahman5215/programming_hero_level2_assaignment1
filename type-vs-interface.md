
# Type vs Interface in TypeScript: Core Differences and When to Use Them

## Introduction

TypeScript provides two powerful ways to define the structure of data: `type` aliases and `interface`. Both help developers write type-safe and maintainable code. Although they look similar, they have some important differences.

## Detailed Explanation

An `interface` is mainly used to describe the structure of objects and classes. It defines which properties and methods an object should contain.

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rakib",
  age: 25
};
```

A `type` alias can also define object structures, but it supports more than objects. It can represent primitive types, unions, intersections, tuples, and other complex types.

```typescript
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
type ID = string | number;
```

One important difference is declaration merging. Multiple interfaces with the same name can be automatically merged.

```typescript
interface Product {
  name: string;
}

interface Product {
  price: number;
}
```

Now, `Product` contains both properties. Type aliases do not support declaration merging.

Both support inheritance-like composition. Interfaces use `extends`, while types commonly use intersection (`&`).

## Conclusion

Use `interface` when defining object structures, especially when working with classes or extensible APIs. Choose `type` when working with unions, intersections, tuples, or primitive aliases. Both are useful, and choosing between them depends on the requirements of your project.
