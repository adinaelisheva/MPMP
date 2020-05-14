### Puzzle number 6
#### The Million Bank Balance Puzzle

See https://www.think-maths.co.uk/BankBalance

The question: you start with 2 deposits on days 1 and 2. Subsequently, a fibonacci-style increasing function is applied each day. What 2 deposits take the LONGEST time to hit exactly $1000000 in the bank?

I mostly brute forced this, with some additional smarts built in. My original attempt took about an hour, but with a simple short-circuit, it takes about 0.9s!

```> node bank.js```

#### Process

Originally I ran this pure brute force, looping the second deposit to a million and the first deposit to half a million (any larger would immediately overshoot 1 million and fail). This took a long time, 4689.99s, or 78.1665 minutes, or 1.3 hours. I noticed the correct answer was in the first 0.001% of the search, after 1.624 seconds. So it felt like the remaining 78.14 minutes of work wasn't necessary. Was it? 

The smaller your first deposit is, the smaller your steps are, increasing the numbers of days to win. And the smaller your second deposit is, the farther from your goal you start, also increasing the number of days. It's not possible to beat the current best if both first AND second deposits are larger than your current best - and this gave me a method of short circuiting.
