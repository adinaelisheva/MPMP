### Puzzle number 9
#### Take-away Triangles

See https://www.think-maths.co.uk/trianglepuzzle

This code checks from -100 to 100 to find every trio of numbers that, following the take-away triangles rule, reduces to 0,7,7. It also searches for the longest path (for fun).

```> node triangles.js > output```

I also put a few examples and some stats in a sheet here: https://docs.google.com/spreadsheets/d/154Q04_0Mc1TqMctLvoDE7pYOFZRp1Z7YtCi7dmsREag/edit#gid=0 The average path length for -100 to 100 is 9.48, fun fact. Data.csv has the data that seeded the stats tab on this sheet.

Observations:

Originally I was checking sums to see whether the results added to 14, but it quickly became clear that that always happened when triangles hit [0,7,7]. So I changed to checking for that. 

Fun fact 2: any set of [0,X,X] will iterate forever. So if you were looking for, say, sums of 30, you could run til [0,15,15].

There are many ways to generate these. Between -100 and 100 I found 16880 sets! One easy way to generate these is to do [X,X,X+7] or [X,X,X-7]. This immediately goes to [0,7,7]. 

Another observation I had is that every single trio of numbers all have differences of some multiple of 7 (I proved this to myself in the google sheet). I'm not sure the relevance of that though. Possibly due to 7 being prime?