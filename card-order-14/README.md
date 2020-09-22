### Puzzle number 14
#### The Card Order Puzzle

See https://www.think-maths.co.uk/card-order

The question: how many arrangements of the numbers 1, 2, 3, and 4 contain no strictly increasing or decreasing sets of 3 (or 4, obviously) cards?

This is a very straightforward brute force implementation. I debated making it extensible to larger sets of numbers, but laziness won out and so this has the checks for 4 numbers hard-coded in. The code prints out all 4 of the passing arrangements.

```> node card-order.js```
