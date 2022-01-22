---
title: 'Abstract Syntax Trees'
excerpt: 'This website is built using Next.js, a framework on top of react.js, styled with Tailwind CSS and hosted on Vercel. In this post I explain how '
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-01-20T05:35:07.322Z'
type: 'blog'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---


So imagine you have a programming language.
You specify its grammar in [Backus-Naur form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form), like this example,
taken from Crafting Interpreters, [Chapter 6](https://craftinginterpreters.com/parsing-expressions.html):
```
expression     → NUMBER
               | unary
               | binary ;
unary          → "-" expression ;
binary         → expression operator expression ;
operator       → "==" | "!=" | "<" | "<=" | ">" | ">="
               | "+"  | "-"  | "*" | "/" ;
```

It's easily seen that, due to it's recursive nature, this grammar can build a tree structure.

```
            !=
         /      \
        +        -
      /   \      |
      5    -     7
           |
           3
```
or in a different notation:
```
binary
(
    !=,
    binary
    (
        +, 
        NUMBER(5), 
        unary(
            -, 
            number(3)
        )
    ), 
    unary
    (
        -, 
        NUMBER(7)
    )
)
```
And then you would probably want these nodes represented as (Java/C++) classes in an inheritance relationship.
```java
class Expr { ... } 
class Unary extends Expr { ... } 
class Binary extends Expr { ... } 
class Number extends Expr { ... }
```
