[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Geometry

Let's practice your's object-oriented programming skills.

## Prerequisites

-   Javascript
-   Object-oriented programming

## Instructions

1.  Fork and clone this repo.
1.  Go inside the folder you just cloned.
1.  Create a web file structure.
1.  Open VScode.
1.  In your `index.html` file, add a HTML boilerplate `HTML:5`.
1.  Wire up yours `script.js`and `style.css` files to the HTML.
1.  Go to your `script.js` file and add a console.log, i.e: `console.log("script file is linked")`.
1.  Open the file `index.html` in your brownser, and open your console (**command** + **option** + **i**)
1.  You should be able to see your message in the console.log, if you are not seeing your message go to step 5 and review your steps from there. 
1.  Submit your work by creating a new pull request.

### :heavy_exclamation_mark: Don't forget to commit your progress

## Rectangle

Declare a **`Rectangle`** class. where the constructor should take a `length` and `width` as arguments.

The Rectangle class should have the following methods...
* **`isSquare`** - This method returns **`true`** if the rectangle is a square, otherwise returns **`false`**
> Hint: Squares have sides of equal length.

* **`area`** - This method returns the area of the rectangle.
> Hint: Area = length * width

* **`perimeter`** - This method returns the perimeter of the rectangle.
> Hint: Calculate the perimeter by adding all of the sides together.

Instantiate 2 rectangles with different lengths and widths.
For each rectangle you instatiated, print the following messages:

**The area of the Rectangle is \____**.

**The perimeter of the Rectangle is \____**.

**This Rectangle is a square!** (if the return of method **`isSquare`** is true).

**This Rectangle is NOT a square!** (if the return of method **`isSquare`** is false)

#### :wink: commit
## Triangle

Declare a **`Triangle`** class. Where the constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

The Triangle class should have the following methods...
* **`isEquilateral`** - This method returns **`true`** if the triangle is equilateral, otherwise returns **`false`**.
> Hint: Equilateral triangles have sides of the same length.

* **`isIsosceles`** - This method returns **`true`** if the triangle is isosceles, otherwise returns **`false`**.
> Hint: Isosceles triangles have two equal sides.

* **`area`** - This method returns the area of the Triangle.
> Hint: A triangle has three sides represented by `a`, `b` and `c`, as well as a semi-perimeter, represented by `s`. `s = (a + b + c)/2` and Area is equal to the square root of `s * (s - a) * (s - b) * (s - c)`.

Instantiate 3 Triangles. each one with different values from each other.
For each rectangle you instatiated, print the following messages:

**The area of the Triangle is \____**.

Add other messages to test your code :+1:

#### :wink: commit

## Shape

Define a `Shape` class. It should have the number of sides and a color associated with it. Make the other classes inherit from it.

#### :wink: commit

## Bonus - BlackJack

 Define a Card class with the following properties:
 
- suit (hearts, spades, clubs, diamonds)
- rank (Ace, 2, 3, 4, .. Jack, King, Queen)
- score (1, 2, 3, 4, ... 11, 12, 13)
 
 Define a Deck class with the following properties and methods:
 
- length (the number of cards - should start at 52)
- cards (an array of cards in the deck)
- draw: return a random card from the cards array
 
When you create an instance of your Deck class (i.e. in your constructor), fill in the cards array with 52 instances of your Card class. You can do this with a nested for loop - first loop through an array of all possible suits, then loop through an array of all possible ranks. Inside your inner loop, create an instance of your Card class and push it into the Deck's cards array.

Instantiate an instance of your Deck and start drawing random cards!
