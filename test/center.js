const test = require('ava');
const table = require('../');

test('center', (t) => {
    t.plan(1);

    const s = table([
        [ 'beep', '1024', 'xyz' ],
        [ 'boop', '3388450', 'tuv' ],
        [ 'foo', '10106', 'qrstuv' ],
        [ 'bar', '45', 'lmno' ]
    ], { align: [ 'l', 'c', 'l' ] });

    t.is(s, [
        'beep    1024   xyz',
        'boop  3388450  tuv',
        'foo    10106   qrstuv',
        'bar      45    lmno'
    ].join('\n'));
});