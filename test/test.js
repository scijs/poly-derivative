var deriv = require("../diff.js")

require("tap").test("derivative", function(t) {

  t.equals(deriv([1,1,1,1]).join(), [1,2,3].join())

  t.end()
})