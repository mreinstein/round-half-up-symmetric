# round-half-up-symmetric

[![Build Status](https://travis-ci.org/mreinstein/round-half-up-symmetric.svg?branch=master)](https://travis-ci.org/mreinstein/round-half-up-symmetric)

Javascript's `Math.round()` has some unexpected behavior when rounding negative numbers, in that it rounds torwards +∞:

```javascript
Math.round(-20.5)  // -20
```

This is commonly known as asymmetric rounding. I want symmetric rounding instead:

```javascript
round(-20.6)   // -21
round(-20.5)   // -21
round(-20.4)   // -20
```

That's what this module accomplishes. There are a bunch of modules in npm for rounding but I couldn't find any that satisfied all of these criteria:
* avoids costly error checking on input values
* works in all versions of javascript
* has no dependencies
* has tests
* is < 10 lines
* works with both es modules and commonjs


## usage

include the library via es modules:

```javascript
import round from 'round-half-up-symmetric'
```

or via commonjs (node)::

```javascript
const round = require('round-half-up-symmetric')

```

Then round decimals to your heart's content:

```javascript
const result = round(-3.5)  // -4
```



## detailed background

(courtesy of https://www.eetimes.com/document.asp?doc_id=1274485)

Round-half-up: This algorithm, which may also be referred to as arithmetic rounding, is the one that we typically associate with the rounding we learned at grade-school. In this case, a half-way value such as 3.5 will round up to 4. One way to view this is that, at this level of precision and for this particular example, we can consider there to be ten values that commence with a 3 in the most-significant place (3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, and 3.9). On this basis, it intuitively makes sense for five of the values to round down and for the other five to round up; that is, for the five values 3.0 through 3.4 to round down to 3, and for the remaining five values 3.5 through 3.9 to round up to 4.

The tricky point with the round-half-up algorithm arrives when we come to consider negative numbers. In the case of the values -3.1, -3.2, -3.3, and -3.4, these will all round to the nearest integer, which is -3; similarly, in the case of values like -3.6, -3.7, -3.8, and -3.9, these will all round to -4. The problem arises in the case of -3.5 and our definition as to what "up" means in the context of round-half-up. Based on the fact that a value of +3.5 rounds up to +4, most of us would intuitively expect a value of -3.5 to round to -4. In this case, we would say that our algorithm was symmetric for positive and negative values.

However, some applications (and mathematicians) regard "up" as referring to positive infinity. Based on this, -3.5 will actually round to -3, in which case we would class this as being an asymmetric implementation of the round-half-up algorithm. For example, the round method of the Java Math Library provides an asymmetric implementation of the round-half-up algorithm, while the round function in MATLAB provides a symmetric implementation. (Just to keep us on our toes, the round function in Visual Basic for Applications 6.0 actually implements the round-half-even [Banker's rounding] algorithm discussed below.)
