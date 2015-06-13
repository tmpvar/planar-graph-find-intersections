var boxIntersect = require('box-intersect')
var segIntersect = require('robust-segment-intersect')
var getAABB = require('segment-aabb');

module.exports = segmentIntersect;

function getBoxes(positions, cells) {
  var l = cells.length;
  var r = new Array(l);
  for (var i=0; i<l; i++) {
    var cell = cells[i]
    var a = positions[cell[0]];
    var b = positions[cell[1]];
    r[i] = getAABB(a, b);
  }
  return r;
}

function segmentIntersect(apositions, aedges, bpositions, bedges, visit) {
  return boxIntersect(
    getBoxes(apositions, aedges),
    getBoxes(bpositions, bedges),
    function(i, j) {
      var e = aedges[i]
      var f = bedges[j]
      if(segIntersect(apositions[e[0]], apositions[e[1]], bpositions[f[0]], bpositions[f[1]])) {
        return visit(i, j);
      }
    }
  )
}
