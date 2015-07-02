var deriv = require("../diff.js")

require("tape")("derivative", function(t) {

  t.equals(deriv([1,1,1,1]).join(), [1,2,3].join())
  t.equals(deriv([1,-1,4.5,2]).join(), [-1,9,6].join())

  t.end()
})