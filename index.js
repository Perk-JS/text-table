const textTable = require('text-table');
const perkTextTable100 = require('perkjs-text-table-100');
const Benchmark = require('benchmark');

const bench = new Benchmark.Suite;

const template = [
    [ 'beep', '1024' ],
    [ 'boop', '334.212' ],
    [ 'foo', '1006' ],
    [ 'bar', '45.6' ],
    [ 'baz', '123.' ]
];

const options = { align: [ 'l', '.' ] };

bench.add('Original text-table', () => textTable(template, options));
bench.add('@perkjs/text-table v1.0.0', () => perkTextTable100(template, options));
bench.on('cycle', (event) => console.log(String(event.target)));
bench.run();