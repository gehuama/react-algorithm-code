// 没有优先级
const NoLanes = 0b00;
// 没有优先级
const NoLane = 0b00;

// 同步的车道
const SyncLane = 0b01;
// 批量同步的车道
const SyncBatchedLane = 0b10;


/**
 * @description: 判断集合子集
 * @return {*}
 */
function isSubsetOfLanes(set, subset) {
    // set 111 subset 011  =011 
    // set 011 subset 100  =000
    return (set & subset) === subset;
}

/**
 * @description: 合并两个车道
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
function mergeLanes(a,b) {
    // 110 011  =111
    return a | b;
}
module.exports = {
    NoLane,
    NoLanes,
    SyncLane,
    SyncBatchedLane,
    isSubsetOfLanes,
    mergeLanes
}