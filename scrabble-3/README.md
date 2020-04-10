### Puzzle number 3
#### How many Scrabble hands add up to exactly 46?

See https://www.think-maths.co.uk/scrabble-puzzle

Pre-question was how many ways can you get to 48?
I decided to answer this for ALL possible totals.

I recommend running this piped to a file. The final scores will come out in the console (on the error channel). Eg:

```> node scrabble.js > output```

For me (running on a 2013 MacBook on Mojave), this ran in just under a minute (53.589s to be precise).

TL;DR (aka "too long; didn't run") here is the number of ways to draw every possible scoring hand:
```
{
  '0': 3,
  '1': 30,
  '2': 171,
  '3': 732,
  '4': 2619,
  '5': 8244,
  '6': 18542,
  '7': 35435,
  '8': 52057,
  '9': 82082,
  '10': 108646,
  '11': 132435,
  '12': 161180,
  '13': 184800,
  '14': 201618,
  '15': 215215,
  '16': 233259,
  '17': 235637,
  '18': 240645,
  '19': 243481,
  '20': 235473,
  '21': 225612,
  '22': 214517,
  '23': 197506,
  '24': 175696,
  '25': 160051,
  '26': 139785,
  '27': 118574,
  '28': 102779,
  '29': 86643,
  '30': 69856,
  '31': 56898,
  '32': 45911,
  '33': 34609,
  '34': 26412,
  '35': 20337,
  '36': 14465,
  '37': 10389,
  '38': 7764,
  '39': 5194,
  '40': 3366,
  '41': 2344,
  '42': 1461,
  '43': 771,
  '44': 503,
  '45': 319,
  '46': 138,
  '47': 80,
  '48': 50,
  '49': 15
}
```

And the list of every possible hand and its score is in output.txt