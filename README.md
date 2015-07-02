poly-derivative
=====================
Computes the derivative a polynomial.  Formally the same thing as multiplying by the index and shifting left.

[![build status](https://secure.travis-ci.org/scijs/poly-derivative.png)](http://travis-ci.org/scijs/poly-derivative)

# Example
Compute the derivative of the polynomial `1 + 2*x + 3*x^2 + 4*x^3`:
```javascript
console.log(require("poly-derivative")([1, 2, 3, 4]))
```

### Output
```
[ 2, 6, 12 ]
```

# Install
Install using [npm](https://www.npmjs.com/):

    npm install poly-derivative

# API
#### `require("poly-derivative")(coeffs)`
Computes the derivative of a polynomial, with coefficients represented in increasing order.

* `coeffs` are the coefficients of the polynomial

**Returns** The derivative of the polynomial

# License
(c) 2013 Mikola Lysenko. MIT License