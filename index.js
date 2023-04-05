const stringLengthFn = (s) => s.length

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

    const rowsCount = rows_.length;
    const columnCount = rows_[0].length;
    const dotsizes = [];
    let tempDotIndex;
    for (let r = 0; r < rowsCount; ++r) {
        for (let c = 0; c < columnCount; ++c) {
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
                const size = dotsizes[index] + (+!column.includes('.')) - (stringLength(column) - dotindex(column));
                return column + ' '.repeat(size);
            }
            return column
        })
    );

    const sizes = [];
    for (r = 0; r < rowsCount; ++r) {
        for (c = 0; c < columnCount; ++c) {
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
                const half = Math.ceil(padLength / 2);
                return ' '.repeat(half) + column + ' '.repeat(padLength - half);
            }

            return column + pad
        }).join(hsep).trimRight()
    ).join('\n');
}

module.exports = main;