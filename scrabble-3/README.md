### Puzzle number 3
#### How many Scrabble hands add up to exactly 46?

See https://www.think-maths.co.uk/scrabble-puzzle

Pre-question was how many ways can you get to 48?
I decided to answer this for ALL possible totals.

I recommend running this piped to a file. The final scores will come out in the console (on the error channel). Eg:

```> node scrabble.js > output```

For me (running on a 2013 MacBook on Mojave), this ran in about 3/4 of a minute (45.59s to be precise).

TL;DR (aka "too long; didn't run") here is the number of ways to draw every possible scoring hand:
```
{
  '5': 1999,
  '6': 6405,
  '7': 18790,
  '8': 25646,
  '9': 48307,
  '10': 69814,
  '11': 86696,
  '12': 110555,
  '13': 132063,
  '14': 147805,
  '15': 157415,
  '16': 177560,
  '17': 180235,
  '18': 185615,
  '19': 192527,
  '20': 188541,
  '21': 182312,
  '22': 176179,
  '23': 165556,
  '24': 147003,
  '25': 135984,
  '26': 120567,
  '27': 102279,
  '28': 89488,
  '29': 76671,
  '30': 62179,
  '31': 50855,
  '32': 41806,
  '33': 31654,
  '34': 24152,
  '35': 18877,
  '36': 13495,
  '37': 9661,
  '38': 7329,
  '39': 4976,
  '40': 3213,
  '41': 2254,
  '42': 1431,
  '43': 749,
  '44': 484,
  '45': 314,
  '46': 138,
  '47': 80,
  '48': 50,
  '49': 15
}
```

And the list of every possible hand and its score is in output.txt