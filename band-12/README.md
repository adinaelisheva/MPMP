### Puzzle number 12
#### The Marching Band Puzzle

See https://www.think-maths.co.uk/marchingband

The question: how many people do you need to form 64 different rectangular arrangements (facing a certain way, so 3x2 != 2x3)?

This is just "find a number with N factors" including 1 and N.

Wrote a simple script to count factors in numbers until I found 64. The script outputs the factors of N to the console, so I recommend running this piped to a file. The final scores will come out in the console (on the error channel). Eg:

```> node band.js > output```
