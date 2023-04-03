const stringLengthFn = (s) => ('' + s).length

const dotindex = (c) => {
    const index = c.lastIndexOf('.');
    return index > -1 ? index + 1 : c.length
}

function main(rows_, opts = {}) {
    const {
        hsep = '  ',
        align = [],
        stringLength = stringLengthFn,
    } = opts;

    const dotsizes = [];
    let tempDotIndex;
    for (let r = 0; r < rows_.length; ++r) {
        for (let c = 0; c < rows_[r].length; ++c) {
            tempDotIndex = dotindex(rows_[r][c]);
            if (!dotsizes[c] || tempDotIndex > dotsizes[c]) {
                dotsizes[c] = tempDotIndex;
            }
        }
    }

    const rows = rows_.map(row =>
        row.map((column_, index) => {
            const column = '' + column_
            if (align[index] === '.') {
                const size = dotsizes[index] + (/\./.test(column) ? 1 : 2) - (stringLength(column) - dotindex(column));
                return column + ' '.repeat(size - 1);
            }
            return column
        })
    );

    const sizes = [];
    for (r = 0; r < rows.length; ++r) {
        for (c = 0; c < rows[r].length; ++c) {
            const columnLength = stringLength(rows[r][c]);
            if (!sizes[c] || columnLength > sizes[c]) {
                sizes[c] = columnLength;
            }
        }
    }

    return rows.map(row =>
        row.map((column, index) => {
            const padLength = (sizes[index] - stringLength(column)) || 0;
            const pad = ' '.repeat(Math.max(padLength, 0));
            if (align[index] === 'r' || align[index] === '.') {
                return pad + column;
            }

            if (align[index] === 'c') {
                return ' '.repeat(Math.ceil(padLength / 2)) + column + ' '.repeat(Math.floor(padLength / 2));
            }

            return column + pad
        }).join(hsep).replace(/\s+$/, '')
    ).join('\n');
}

module.exports = main;