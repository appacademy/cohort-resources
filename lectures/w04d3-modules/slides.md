
## W4D3
# Implementing Chess

---

## Agenda

  + Null Object Pattern
  + Singleton Module
  + Movement Modules
  	+ Slideable
    + Stepable

---

## Null Object Pattern

+ A relatively common pattern in OOP in which we create an object that represents the absence of information
	+ Ruby does this by default in the sense that `nil` is actually an object!
  
---

## `NullPiece` Class

+ Goal is to treat all 64 squares of the board in exactly the same way
+ The solution:
	1. Implement a `NullPiece` class with the same interface as `Piece`
  2. Place an instance of this class at every "empty" square on the grid
  
---

## Singleton Module

+ A built-in module that limits a class to only having a single instance
	+ Replaces `::new` method with one called `::instance`
+ Prevents unnecessary creation of new instances
+ Use cases include:
	+ Logging software
  + Database connections

---

### In our case...

+ We can save memory by creating just a single instance of `NullPiece`

---

## Movement Modules

---

![chess-uml](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/chess_piece_UML.jpg)

---

## Slideable Pieces

### Queen, Rook, Bishop

---

![sliding-behavior](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/sliding-behavior.jpg)

---

![queen-positions](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/queen-positions.jpg)

---

![sliding-behavior2](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/sliding-behavior2.jpg)

---

![queen](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/queen.jpg)

---

![rook](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/rook.jpg)

---

![bishop](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/bishop.jpg)

---

## Slideable Pseudocode

---

![chess-uml](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/chess_piece_UML.jpg)

---

## Stepable Pieces

### Knight, King

---

## Stepable Pseudocode

---

![chess-uml](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/mini-chess-modules/chess_piece_UML.jpg)
