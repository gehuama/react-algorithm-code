class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
const A = new Node("1");
const B = new Node("2");
const C = new Node("3");
A.left = B
A.right = C
// 比较占内存