# simplical-crossing-edges

find all of the segments in two simplicial complexes that intersect

## install

`npm install each-edge-crossing`

## use

```javascript
var find = require('planar-graph-find-edge-crossings');

var apositions = [[0, 0], [0, 10], [10, 10], [10, 0]];
var aedges = [[0, 1], [1, 2], [2, 3], [3, 0]];
var bpositions = [[5, 5], [5, 20], [20, 20], [20, 5]];
var bedges = [[0, 1], [1, 2], [2, 3], [3, 0]];

var segmentsThatIntersect = [];

find(apositions, aedges, bpositions, bedges, function(x, y) {
  console.log(
    apositions[aedges[x][0]] + ' -> ' + apositions[aedges[x][1]],
    'intersects',
    bpositions[bedges[y][0]] + ' -> ' + bpositions[bedges[y][1]]
  )
});
```

outputs:
```
10,10 -> 10,0 intersects 20,5 -> 5,5
0,10 -> 10,10 intersects 5,5 -> 5,20
```


### api signature

__find__(`apositions`, `aedges`, `bpositions`, `bedges`, `visitor`)

* `apositions` - an array of n-vectors
* `aedges` - an array of 2 part arrays that are indices into a `apositions` (forming segments)
* `bpositions` - an array of n-vectors
* `bedges` - an array of 2 part arrays that are indices into a `bpositions` (forming segments)
* `visitor` - a function that is called whenever an intersection between two segments.  Signature: `function visitor(a, b) { }` where `a` is the index into `aedges` and `b` is the index into `bedges`


## license

[MIT](LICENSE.txt)
