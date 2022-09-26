const TotalLanes = 31;
// 没有车道，所有位都为0
const NoLanes = /*                        */ 0b0000000000000000000000000000000;
const NoLane = /*                          */ 0b0000000000000000000000000000000;
// 同步车道，优先级最高
const SyncLane = /*                        */ 0b0000000000000000000000000000001;
const SyncBatchedLane = /*                 */ 0b0000000000000000000000000000010;
// 离散用户交互车道 click
const InputDiscreteHydrationLane = /*      */ 0b0000000000000000000000000000100;
const InputDiscreteLanes = /*                    */ 0b0000000000000000000000000011000;
// 连续交互车道 mousemove
const InputContinuousHydrationLane = /*           */ 0b0000000000000000000000000100000;
const InputContinuousLanes = /*                  */ 0b0000000000000000000000011000000;
// 默认车道
const DefaultHydrationLane = /*            */ 0b0000000000000000000000100000000;
const DefaultLanes = /*                   */ 0b0000000000000000000111000000000;
// 渐变车道
const TransitionHydrationLane = /*                */ 0b0000000000000000001000000000000;
const TransitionLanes = /*                       */ 0b0000000001111111110000000000000;
// 重试车道
const RetryLanes = /*                            */ 0b0000011110000000000000000000000;
const SomeRetryLanes = /*                  */ 0b0000010000000000000000000000000;
// 选择性水合车道
const SelectiveHydrationLane = /*          */ 0b0000100000000000000000000000000;
// 非空闲车道
const NonIdleLanes = /*                                 */ 0b0000111111111111111111111111111;
const IdleHydrationLane = /*               */ 0b0001000000000000000000000000000;
// 空闲车道
const IdleLaness = /*                             */ 0b0110000000000000000000000000000;
// 离屏车道
const OffscreenLane = /*                   */ 0b1000000000000000000000000000000;

const NoTimestamp = -1;

// const InputDiscreteLanes = 0b11000;
/**
 * @description: 获取优先级最低的那一个车道 
 * 核心是取最左边的那个1
 * @param {*} lanes
 * @return {*}
 */
function getLowestPriorityLane(lanes){
    // 0000000000000000000000000011000
    // 31-27 = 4
    // 1 << 4 1000
    // 因为总长度是31位
    const index =  31 - Math.clz32(lanes);
    return 1 << index;
}

/**
 * @description: 获取优先级最高的车道
 * @param {*} lanes
 * @return {*}
 */
function getHighestPriorityLane(lanes){
    return lanes & -lanes;
}
console.log(getLowestPriorityLane(InputDiscreteLanes)); // 0b10000 16
console.log(getHighestPriorityLane(InputDiscreteLanes)); // 0b1000 8