const valueStack = [];
let index = -1;
function createCursor(defaultValue) {
    return { current: defaultValue };
}
function pop(cursor) {
    cursor.current = valueStack[index]
    valueStack[index] = null;
    index--;
}
function push(cursor, value) {
    index++;
    valueStack[index] = cursor.current;
    cursor.current = value;
}
module.exports = {
    createCursor,
    pop,
    push
}