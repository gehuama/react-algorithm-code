const { createCursor, pop, push } = require("./ReactFiberStack");
const { pushProvider, popProvider } = require("./ReactFiberNewContext");
// 先创建一个值的指针
let valueCursor = createCursor();
let fiber = { type: { _context: {} } };
pushProvider(fiber, "A");
console.log(fiber.type._context._currentValue);
pushProvider(fiber, "B");
console.log(fiber.type._context._currentValue);
pushProvider(fiber, "C");
console.log(fiber.type._context._currentValue);

popProvider(fiber);
console.log(fiber.type._context._currentValue);
popProvider(fiber);
console.log(fiber.type._context._currentValue);
popProvider(fiber);
console.log(fiber.type._context._currentValue);