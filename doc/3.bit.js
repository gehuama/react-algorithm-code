let a = 0b001;
// 左移2位
console.log("左移（<<）", (a<<2).toString()); //  
// 无符号右移  >>> 丢弃被移除的位，左侧补0
let b = 0b100
console.log("无符号右移（>>>）", (b>>>1).toString());
// 有符号右移 >> 丢弃移除的位，左侧填充最高位
let c = 0b101 // 5 左侧的1位符号位时，-3
console.log("无符号右移（>>）", (c>>1).toString());