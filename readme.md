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


## Triangle

Declare a **`Triangle`** class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

Augment the class with the following methods...
* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).

> Hint: Equilateral triangles have sides of the same length.

* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).

> Hint: Isosceles triangles have two equal sides.

* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).

> Hint: A triangle has three sides represented by `a`, `b` and `c`, as well as a semi-perimeter, represented by `s`. `s = (a + b + c)/2` and Area is equal to the square root of `s * (s - a) * (s - b) * (s - c)`.

* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

> Hint: Obtuse triangles have one side that is longer in length than both of the other two sides.

Create a few rectangles with different lengths and widths.


## LineSegment

Declare a `LineSegment` class. Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.

Augment the class with the following method...
* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).

> Hint: Calculate the line segment by taking the square root of `((x2 - x1) ** 2) + ((y2 - y1) ** 2)`.

## Shape

Define a `Shape` class. It should have the number of sides and a color associated with it. Make the other classes inherit from it.
