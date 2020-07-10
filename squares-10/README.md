### Puzzle number 10
#### How many boards are there with no squares?

See https://www.think-maths.co.uk/avoidthesquare

I recommend running this piped to a file. The timing will come out in the console (on the error channel). Eg:

```> node squares.js > output```

For me (running on a 2013 MacBook on Mojave), the times were about:

- `7s` to generate all boards
- `0.05s` to find the first tie
- `9s` to find all ties

The first tie this algorithm found is the one I put in as my answer - it has some very nice symmetries to it:
``` O  O  X  X  X 
 O  X  X  O  O 
 O  O  X  X  O 
 O  X  X  O  O 
 O  O  X  X  X 
```

The list of every tie board is in output.txt

#### Algorithm Details

This runs in 2 stages - generating all the boards and then checking them for squares. I could have checked as I generated but I didn't feel like it.

I'm storing the boards as binary strings for ease of passing around (no risk of pesky pass-by-reference errors... thanks JavaScript arrays). 

To generate all the boards, I just went through every binary number from 0 to 1111111111110000000000000 (which is 33546240 in decimal). Then I kept the ones with 12 1s, using [this nifty algorithm](https://stackoverflow.com/questions/8871204/count-number-of-1s-in-binary-representation/18293598#18293598) to check.

To test for squares, I looked at the squares going off to the right and down from every cell. Squares going up or to the left would have been caught by a previous cell's check. I used every slope from 0/1 to 4/1 and just looked at the expected 3 corners to see if they matched the cell being checked.

I was surprised at how fast the checking part went! Thanks, computers.