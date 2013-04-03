"use strict"

function diff(poly, result) {
  var n = poly.length
  if(n <= 1) {
    return []
  }
  if(!result) {
    result = new Array(poly.length-1)
  }
  for(var i=1; i<n; ++i) {
    result[i-1] = i * poly[i]
  }
  return result
}

module.exports = diff