---
title: 'Visitor Pattern'
excerpt: "In which I describe the visitor pattern, why it's useful and how to implement it in Java"
coverImage: '/assets/blog/visitor-pattern/cover.jpg'
date: '2022-01-23T19:35:07.322Z'
type: 'blog'
ogImage:
  url: '/assets/blog/visitor-pattern/cover.jpg'
---

Wikipedia describes the [Visitor Pattern](https://en.wikipedia.org/wiki/Visitor_pattern) as follows: 
> The visitor design pattern is a way of separating an algorithm from an object structure on which it operates.
> A practical result of this separation is the ability to add new operations to existing object structures without modifying the structures.

## Rationale

Consider the situation where you have several classes, like `Bread`, `Cheese` and `Wine`, each of which has several pieces of functionality, like `make()`, `store()` and `consume()`.

What if we want to add an additional class that can also do these things?
No problem, OOP is perfectly suited for that. You just add another class and implement the methods there.

But what happens if you wanted to add additional functionality? Imagine you wanted to add the functionality to `discard()` them.
With the current setup, you would then need to go into every existing class and change it, to add the new functionality.

That's not great (i know, [citation needed]).
What if we could add one Class that has all the new logic related to discarding things?
That's where the Visitor Pattern comes in, because it allows us to do just that.

## Implementation


## UML, because who doesn't love UML

