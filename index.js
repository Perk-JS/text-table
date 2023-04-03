const textTable = require('text-table');
const perkTextTableGit = require('perkjs-text-table-git');
const perkTextTable100 = require('perkjs-text-table-100');
const perkTextTable110 = require('perkjs-text-table-110');
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
bench.add('@perkjs/text-table master branch', () => perkTextTableGit(template, options));
bench.add('@perkjs/text-table v1.1.0', () => perkTextTable110(template, options));
bench.add('@perkjs/text-table v1.0.0', () => perkTextTable100(template, options));
bench.on('cycle', (event) => console.log(String(event.target)));
bench.run();