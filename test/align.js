const test = require('ava');
const table = require('../');

test('align', (t) => {
    t.plan(1);

    const s = table([
        [ 'beep', '1024' ],
        [ 'boop', '33450' ],
        [ 'foo', '1006' ],
        [ 'bar', '45' ]
    ], { align: [ 'l', 'r' ] });

    t.is(s, [
        'beep   1024',
        'boop  33450',
        'foo    1006',
        'bar      45'
    ].join('\n'));
});
