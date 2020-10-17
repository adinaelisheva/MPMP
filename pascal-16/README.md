### Puzzle number 16
#### How Odd Is Pascal's Triangle?

See https://www.think-maths.co.uk/pascaltriangle

The question: what percentage of the numbers in the first 128 rows (and beyond) of Pascal's triangle are odd?

I wrote a simple algorithm to compute the triangle and the % of odd numbers, and then I ran it up til 50,000 rows. You can see that [here, in spreadsheet form](https://docs.google.com/spreadsheets/d/1iJn-21GBs9jcFEYkHxRg0FtP97RSB7JOwN85Q0-cd_k/edit?usp=sharing). 

On the way to 50k I grabbed the 128th row, which is 15.49%.

In the first 50000 rows, the odd percentage strictly decreases to 0.02%, so I bet it goes to 0. Maybe something to do with the symmetricity of the triangle, since 2 odd numbers sum together to yield an even number? 