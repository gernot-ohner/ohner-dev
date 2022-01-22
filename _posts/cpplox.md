---
title:  "Why I switched from C++ to Java when implementing Lox"
excerpt: 'This website is built using Next.js, a framework on top of react.js, styled with Tailwind CSS and hosted on Vercel. In this post I explain how '
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-01-20T05:35:07.322Z'
type: 'blog'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

# Why I switched from C++ to Java when implementing Lox

Early in my time at the [Recurse Center](https://recurse.com) I (re-)familiarized myself with C++ by reading 
[*A Tour of C++*](https://www.stroustrup.com/tour2.html) by Bjarne Stroustrup.
Since I am someone who thought that *The Crying of Lot 49* was a lot of fun and is *const*antly looking for new things to learn, 
it took me only one encounter with function signatures like `const int* const f(const std::vector<int>& x) const` and move semantics to get me hooked.

So when I later started a study group to work through Robert Nystrom's book [Crafting Interpreters](https://craftinginterpreters.com/)
I thought "why not do it in C++?". So I did. For a while. 

The short version of why I switched to Java for the implementation of Lox is:  
> 'virtual' cannot be specified on member function templates   
 
The this post is the long version.
It has several parts:
- dynamic and static dispatch
- templating
- visitor pattern


## Dispatch
First, a riddle: here is the (at first glance) exact same code, once in Java and once in C++. 
Can you predict what will be printed in each case? 

<table>
<tr>
<th>Java</th>
<th>C++</th>
</tr>
<tr>
<td>

```java
class Shape {
  String description() {
      return "Hi, I'm a Shape!";
  }
}

class Circle extends Shape {
    String description() {
        return "Hi, I'm a Circle!";
    }
}

public class Main {
    static void describe(Shape s) {
        System.out.println(s.description());
    }
    
    public static void main(String[] args) {
        var circle = new Circle();
        describe(circle);
    }
}
```

<details>
<summary>Result</summary>
"Hi, I'm a Circle!"
</details>

</td>
<td>

```cpp
class Shape {
public:
    std::string description() {
        return "Hi, I'm a Shape!";
    }
};

class Circle : public Shape {
public:
    std::string description() {
        return "Hi, I'm a Circle!";
    }
};

void describe(Shape& s) {
    std::cout << s.description() << std::endl;
}

int main(int argc, char** argv) {
    auto circle = Circle{};
    describe(circle);
}
```

<details>
<summary>Result</summary>
"Hi, I'm a Shape!"
</details>

</td>
</tr>
</table>

Did you get it right? 
Java prints "Hi, I'm a Circle", because it has a mechanism called ***dynamic dispatch***.
This allows the language to resolve which method to actually call during runtime. 

C++ prints "Hi, I'm a Shape"
This happens, because in C++ the default mechanism is ***static dispatch***, so the implementation
that will be called is selected at compile-time.

In order to get dynamic dispatch in C++, you must declare a function `virtual`.
Go ahead, try it. By simply adding the `virtual` keyword to the signature of `Shape::description`
you can get the same result as in Java: "Hi, I'm a Circle!"

That was easy. So what's the problem? 

## The Visitor Pattern

I wrote a whole separate post about what the visitor pattern is and what problem it solves [here](2022-01-04-visitor-pattern.md).
The short version is: 
Rather than adding every new piece of functionality in a model class itself, you add an `accept` method that
accepts a visitor and a visitor that implements the desired new functionality for all relevant model classes.

Imagine you're writing an interpreter and you have a couple of classes with an inheritance relationship to 
model the elements of your grammar. A very simple one could look like this: 

```java
class Expr implements Visitable { ... } 
class Unary extends Expr { ... } 
class Binary extends Expr { ... } 
class Number extends Expr { 
    <T> T accept(IVisitor visitor) {
       return visitor.visitNumber(this);
    }
}
```

In this case rather than adding `print` functionality to `Unary`, `Binary` and `Number`, 
we'd create a `PrettyPrintVisitor` that takes care of the printing of all our classes.

So then later, when we need evaluation, typechecking or maybe even bytecode generation, 
we don't need to open up our `expr` subclasses and add all this unrelated functionality to a 
class that could otherwise have remained happily closed.

Instead, we can create an `EvaluationVisitor`, a `TypeCheckingVisitor` and a `ByteCodeGenerationVisitor`
that neatly encapsulate their functionality in a separate class, like this: 

```java
class EvaluationVisitor implements IVisitor {
   T1 visitBinary(Binary expr) { ... }
   T2 visitUnary(Unary expr) { ... }
   T3 visitNumber(Number expr) { ... }
}
```

Each visitor might return a different type:
Visiting the binary expression `1 + 3`, the `EvaluationVisitor` will presumably return `4`
while the `TypeCheckingVisitor` will return `Int` or `Number`.

But even more importantly, each method in a visitor might need to return a different type!

## The Problem

So this is where it all comes together.
We have an inheritance hierarchy of classes representing the elements of our grammar.
Each of these classes has an accept method it can use to accept a visitor (i.e. some class that implements the `IVisitor` interface).

As a visitor needs to return different types depending on which kind of object it is visiting, it needs to be templated.

But since it is the concrete implementation in e.g. `EvaluationVisitor` that needs to be called, 
rather than the one in `IVisitor` [1] , we need dynamic dispatch.
To get dynamic dispatch in C++, we want to mark our method `virtual`, so our code would be: 

```
class IVisitor {
  IVisitor();
  
  template <typename T>
  virtual void accept(BaseVisitor<T> *visitor) { visitor->visit(this); }; 
  
  virtual ~IVisitor();
}
```

Which the compiler reject with the error message: 
> 'virtual' cannot be specified on member function templates

Why? That is a story of the next post!
Thanks for reading!


[1] C++ doesn't have interfaces, so `IVisitor` is a class as well.