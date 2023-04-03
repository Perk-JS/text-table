const test = require('ava');
const table = require('../');

test('table', (t) => {
    t.plan(1);

    const s = table([
        [ 'master', '0123456789abcdef' ],
        [ 'staging', 'fedcba9876543210' ]
    ]);

    t.is(s, [
        'master   0123456789abcdef',
        'staging  fedcba9876543210'
    ].join('\n'));
});