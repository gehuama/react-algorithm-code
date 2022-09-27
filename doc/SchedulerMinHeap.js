/**
 * @description: 向最小堆里添加元素
 * @param {*} heap
 * @param {*} node
 * @return {*}
 */
function push(heap, node) {
    const index = heap.length; // 0
    heap.push(node);
    siftUp(heap, node, index);
}
/**
 * @description: 弹出堆顶元素
 * @param {*} heap
 * @return {*}
 */
function pop(heap) {
    const first = heap[0];
    if (first !== undefined) {
        const last = heap.pop();
        if (first !== last) {
            heap[0] = last;
            siftDown(heap, last, 0);
        }
    }
    return null;
}
/**
 * @description: 
 * @param {*} heap
 * @param {*} node
 * @param {*} i
 * @return {*}
 */
function siftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    while (index < length) {
        const leftIndex = (index + 1) * 2 - 1;
        const left = heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = heap[rightIndex];
        // 如果左子节点小于父节点，需要调整了
        if (left !== undefined && compare(left, node) < 0) {
            // 比较左子节点和右子节点那个小 如果右边有节点，并且比左节点要小
            if (right !== undefined && compare(right, left)<0) {
                // 让父节点和右子节点进行交换
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
            } else {
                // 让父节点和左子节点进行交换
                heap[index] = left;
                heap[leftIndex] = node;
                index = leftIndex;
            }
        } else if (right !== undefined && compare(right, node) < 0) {
            // 让父节点和右子节点进行交换
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
        } else {
            return ;
        }
    }
}
/**
 * @description: 查看堆顶元素
 * @param {*} heap
 * @return {*}
 */
function peek(heap) {
    const first = heap[0];
    return first;
}
/**
 * @description: 向上调整
 * @param {*} heap 最小堆
 * @param {*} node 需要调整的节点
 * @param {*} i 当前节点的索引
 * @return {*}
 */
function siftUp(heap, node, i) {
    let index = i;
    while (true) {
        // 获取父节点对应的索引
        const parentIndex = index - 1 >>> 1;
        // 获取父节点
        const parent = heap[parentIndex];
        // 说明父亲的值比儿子大，需要交换位置，向上调整
        if (parent !== undefined && compare(parent, node) > 0) {
            heap[parentIndex] = node;
            heap[index] = parent;
            // 让索引等于父亲的索引，然后继续向上调整
            index = parentIndex;
        } else {
            return;
        }
    }
}
function compare(a, b) {
    const diff = a.sortIndex - b.sortIndex;
    return diff;
}
module.exports = {
    push,
    pop,
    peek,
}