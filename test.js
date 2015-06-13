var test = require('tape');
var doesIsect = require('./planar-graph-find-intersections');

test('intersections', function(t) {

  var apositions = [[0, 0], [0, 10], [10, 10], [10, 0]];
  var aedges = [[0, 1], [1, 2], [2, 3], [3, 0]];
  var bpositions = [[5, 5], [5, 20], [20, 20], [20, 5]];
  var bedges = [[0, 1], [1, 2], [2, 3], [3, 0]];

  var segmentsThatIntersect = [];

  var r = doesIsect(apositions, aedges, bpositions, bedges, function(x, y) {
    console.log(
      apositions[aedges[x][0]] + ' -> ' + apositions[aedges[x][1]],
      'intersects',
      bpositions[bedges[y][0]] + ' -> ' + bpositions[bedges[y][1]]
    )

    segmentsThatIntersect.push(x);
    segmentsThatIntersect.push(y);
  });

  t.notOk(r, 'no return value')
  t.deepEqual(segmentsThatIntersect, [
    2, 3, 1, 0
  ], 'finds segments where intersections occurred')

  t.end();
});

test('intersections - early termination', function(t) {

  var apositions = [[0, 0], [0, 10], [10, 10], [10, 0]];
  var aedges = [[0, 1], [1, 2], [2, 3], [3, 0]];
  var bpositions = [[5, 5], [5, 20], [20, 20], [20, 5]];
  var bedges = [[0, 1], [1, 2], [2, 3], [3, 0]];

  var segmentsThatIntersect = [];

  var r = doesIsect(apositions, aedges, bpositions, bedges, function(x, y) {
    // causes an early termination
    return [x, y];
  });

  t.deepEqual(r, [2, 3]);
  t.end();
});

test('no intersections', function(t) {

  var apositions = [[0, 0], [0, 10], [10, 10], [10, 0]];
  var aedges = [[0, 1], [1, 2], [2, 3], [3, 0]];
  var bpositions = [[25, 25], [25, 20], [20, 20], [20, 25]];
  var bedges = [[0, 1], [1, 2], [2, 3], [3, 0]];

  var segmentsThatIntersect = [];

  doesIsect(apositions, aedges, bpositions, bedges, function(x, y) {
    segmentsThatIntersect.push(x);
    segmentsThatIntersect.push(y);
  });

  t.deepEqual(segmentsThatIntersect, [], 'no intersections')
  t.end();
})
