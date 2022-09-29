let a = 0b00000011;
//      0b11111100 补码 负数的补码
// 负数的补码怎么算 原码 符号位不变 其他位取反，再加1得到补码
// 11111011
// 10000100
// -4
console.log(~a);

/**
 * @description: 分离出所有比特位中最右边的1
 * 分离出最高优先级的车道
 * @param {*} lanes 车道
 * @return {*} 车道
 */
function getHighestPriorityLane(lanes){
    return lanes & -lanes;
}

// lanes = 00001100 =12
// -lanes = -12 = 10001100 => 11110011 => 11110100
// 00001100
// &
// 11110100
// 0000100

// 00001100
// 11110011
// 11110100


// 10000111 -248
// 11000011
// 向右有符号移动一位是几
console.log(-248>> 1); // -124
// 01000011
console.log((-248)>>> 1)