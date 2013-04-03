poly-derivative
=====================
Computes the derivative a polynomial.  Formally the same thing as multiplying by the index and shifting left.

## Install

    npm install poly-derivative
    
## Example
```javascript
console.log(require("poly-derivative")([1, 2, 3, 4]))
```

### `require("poly-derivative")(coeffs)`
Computes the derivative of a polynomial, with coefficients represented in increasing order.

* `coeffs` are the coefficients of the polynomial

**Returns** The derivative of the polynomial

# Credits
(c) 2013 Mikola Lysenko. MIT License