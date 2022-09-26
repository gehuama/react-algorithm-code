// 2. effectList
// 定义一个针对某个fiber节点的操作
const OP_INSERT = 1 << 0; //1 0b01
const OP_REMOVE = 1 << 1; //2 0b10

let OP = 0b000;
// 增加一个插入操作
OP |= OP_INSERT;
// 增加一个删除操作
OP |= OP_REMOVE;
console.log(OP.toString(2));

// 删除操作
OP = OP & ~OP_INSERT
console.log(OP.toString(2));

// 判断是否包含
console.log((OP & OP_INSERT) === OP_INSERT)
console.log((OP & OP_REMOVE) === OP_REMOVE)

// 判断是否不包含
console.log((OP & OP_INSERT) === 0)
console.log((OP & OP_REMOVE) === 0)