let a = 0b100; // 4
let b = 0b011; // 3

console.log("按位与（&）",(a&b).toString()) // 000 0
console.log("按位或（|）",(a|b).toString()) // 111 7
console.log("按位异或（^）",(a^b).toString()) // 111 7
// 0b011 
// 按位非运算时，任何数字 x 的运算结果都是 -(x + 1)。例如，〜-5 运算结果为 4。
//  0b100  0b011
// 符合位0表示正数 1表示负数
// 100 如果1表示符号位的话，1表示负数  -4
// 011 
console.log("按位非（～）", ~a)
// console.log(a&b.toString())
