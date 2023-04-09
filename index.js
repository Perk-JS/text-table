const stringLengthFn = (s) => s.length

const dotindex = (c) => {
    const index = c.lastIndexOf('.');
    return index > -1 ? index : c.length
}

function main(rows_, opts = {}) {
    const {
        hsep = '  ',
        align = [],
        stringLength = stringLengthFn,
    } = opts;

    const rowsCount = rows_.length;
    const columnCount = rows_[0].length;
    const dotsizes = new Array(columnCount).fill(-1);
    const sizes = new Array(columnCount).fill(-1);
    let tempDotIndex, tempColumnLength;
    for (let r = 0; r < rowsCount; ++r) {
        for (let c = 0; c < columnCount; ++c) {
            tempDotIndex = dotindex(rows_[r][c]);
            tempColumnLength = stringLength(rows_[r][c]);
            if (tempDotIndex > dotsizes[c]) {
                dotsizes[c] = tempDotIndex;
            }
            if (tempColumnLength > sizes[c]) {
                sizes[c] = tempColumnLength;
            }
        }
    }

    let pad, rightPad, padLength, half, dotIndex;
    return rows_.map(row =>
        row.map((column, index) => {
            padLength = (sizes[index] - stringLength(column)) || 0;
            if (align[index] === '.') {
                dotIndex = dotindex(column)
                rightPad = dotsizes[index] + (+!column.includes('.')) - (stringLength(column) - dotIndex);
                pad = ' '.repeat(dotsizes[index] - dotIndex)
                return pad + column + ' '.repeat(rightPad >= 0 ? rightPad : 0);
            }

            pad = ' '.repeat(padLength >= 0 ? padLength : 0);
            if (align[index] === 'r') {
                return pad + column;
            }

            if (align[index] === 'c') {
                half = (padLength / 2) >> 0;
                return ' '.repeat(padLength - half) + column + ' '.repeat(half);
            }

            return column + pad
        }).join(hsep).trimRight()
    ).join('\n');
}

module.exports = main;