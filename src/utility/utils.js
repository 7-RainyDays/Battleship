const LETTERS = 'ABCDEFGHIJ';

export function transCoordinates(str) {
    //translates the input string to match the gameboard index format;
    const x = LETTERS.indexOf(str.charAt(0).toUpperCase());
    const y = parseInt(str.slice(1)) - 1;
    return [x, y];
}


export function validateInput(str) {
    //checks the input string can be placed on the gameboard
    const single = /^[A-J](10|[1-9])$/;
    const range = /^[A-J](10|[1-9])-[A-J](10|[1-9])$/;

    if (!(single.test(str) || range.test(str))) return false;

    if (range.test(str)) {
        const [from, to] = str.split("-");
        const [x1, y1] = transCoordinates(from);
        const [x2, y2] = transCoordinates(to);

        const isStraight = x1 === x2 || y1 === y2;
        const inBounds = [x1, x2, y1, y2].every((val) => val >= 0 && val < 10);
        const maxLength = Math.abs(x1 - x2) <= 5 && Math.abs(y1 - y2) <= 5;
        return isStraight && inBounds && maxLength;
    }

    // single field
    const [x, y] = transCoordinates(str);
    return x >= 0 && x < 10 && y >= 0 && y < 10;
};

export function coordsToNotation(coords) {
    //translate coords e.g. [1,1] to [B2]
    const toAlpha = (y) => LETTERS[y];       // 0 → A
    const toNum = (x) => (x + 1).toString(); // 0 → 1

    const start = coords[0];
    const end = coords[coords.length - 1];

    return `${toAlpha(start[1])}${toNum(start[0])}-${toAlpha(end[1])}${toNum(end[0])}`;
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}