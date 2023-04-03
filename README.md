# text-table

### This is an optimized version of [text-table](https://www.npmjs.com/package/text-table)

generate borderless text table strings suitable for printing to stdout

# Install

With [npm](https://npmjs.org) do:

```
npm install @perkjs/text-table
```

# Benchmark

```
Original text-table x 202,234 ops/sec ±1.41% (87 runs sampled)
@perkjs/text-table v1.1.0 x 296,727 ops/sec ±1.47% (88 runs sampled)
@perkjs/text-table v1.0.0 x 220,209 ops/sec ±1.48% (84 runs sampled)
```

# Example

## default align

``` js
var table = require('text-table');
var t = table([
    [ 'master', '0123456789abcdef' ],
    [ 'staging', 'fedcba9876543210' ]
]);
console.log(t);
```

```
master   0123456789abcdef
staging  fedcba9876543210
```

## left-right align

``` js
var table = require('text-table');
var t = table([
    [ 'beep', '1024' ],
    [ 'boop', '33450' ],
    [ 'foo', '1006' ],
    [ 'bar', '45' ]
], { align: [ 'l', 'r' ] });
console.log(t);
```

```
beep   1024
boop  33450
foo    1006
bar      45
```

## dotted align

``` js
var table = require('text-table');
var t = table([
    [ 'beep', '1024' ],
    [ 'boop', '334.212' ],
    [ 'foo', '1006' ],
    [ 'bar', '45.6' ],
    [ 'baz', '123.' ]
], { align: [ 'l', '.' ] });
console.log(t);
```

```
beep  1024
boop   334.212
foo   1006
bar     45.6
baz    123.
```

## centered

``` js
var table = require('text-table');
var t = table([
    [ 'beep', '1024', 'xyz' ],
    [ 'boop', '3388450', 'tuv' ],
    [ 'foo', '10106', 'qrstuv' ],
    [ 'bar', '45', 'lmno' ]
], { align: [ 'l', 'c', 'l' ] });
console.log(t);
```

```
beep    1024   xyz
boop  3388450  tuv
foo    10106   qrstuv
bar      45    lmno
```

# methods

``` js
var table = require('text-table')
```

## var s = table(rows, opts={})

Return a formatted table string `s` from an array of `rows` and some options
`opts`.

`rows` should be an array of arrays containing strings, numbers, or other
printable values.

options can be:

* `opts.hsep` - separator to use between columns, default `'  '`
* `opts.align` - array of alignment types for each column, default `['l','l',...]`
* `opts.stringLength` - callback function to use when calculating the string length

alignment types are:

* `'l'` - left
* `'r'` - right
* `'c'` - center
* `'.'` - decimal

# Use with ANSI-colors

Since the string length of ANSI color schemes does not equal the length
JavaScript sees internally it is necessary to pass the a custom string length
calculator during the main function call.

See the `test/ansi-colors.js` file for an example.

# license

MIT