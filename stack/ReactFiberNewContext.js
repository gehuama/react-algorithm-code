const { push, createCursor, pop } = require("./ReactFiberStack");
// 当前值的指针
const valueCursor = createCursor(null);
/**
 * @description: 入栈provider
 * @param {*} providerFiber
 * @param {*} nextValue
 * @return {*}
 */
function pushProvider(fiber, nextValue){
    const context = fiber.type._context;
    // 改变context._currentValue之前要把老的值暂存到valueStack里
    push(valueCursor, context._currentValue);
    // 在源码里我们把context的value值保存到了context._currentValue上
    context._currentValue = nextValue;
}

/**
 * @description: 出栈provider
 * @param {*} providerFiber
 * @return {*}
 */
function popProvider(fiber){
    const currentValue = valueCursor.current;
    pop(valueCursor);
    const context = fiber.type._context;
    context._currentValue = currentValue;
}

module.exports={
    pushProvider,
    popProvider
}