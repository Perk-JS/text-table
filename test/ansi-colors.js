const test = require('ava');
const table = require('../');
const color = require('cli-color');

test('center', (t) => {
    t.plan(1);

    const opts = {
        align: [ 'l', 'c', 'l' ],
        stringLength: (s) => color.getStrippedLength(s)
    };

    const s = table([
        [
            color.red('Red'), color.green('Green'), color.blue('Blue')
        ],
        [
            color.bold('Bold'), color.underline('Underline'),
            color.italic('Italic')
        ],
        [
            color.inverse('Inverse'), color.strike('Strike'),
            color.blink('Blink')
        ],
        [ 'bar', '45', 'lmno' ]
    ], opts);

    t.is(color.strip(s), [
        'Red        Green    Blue',
        'Bold     Underline  Italic',
        'Inverse    Strike   Blink',
        'bar          45     lmno'
    ].join('\n'));
});