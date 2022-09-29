const { initializeUpdateQueue, enqueueUpdate, processUpdateQueue } = require("./ReactUpdateQueue")
const { SyncLane, SyncBatchedLane } = require("./ReactFiberLane")
// 定义一个fiber节点，节点有一个状态
const fiber = { memoizedState: { msg: '' } };
// 每当你创建一个fiber时候会为它初始一个更新队列
initializeUpdateQueue(fiber);
let update1 = {name: "update1", payload: (state) => ({ msg: state.msg + "A" }), lane: SyncBatchedLane };
enqueueUpdate(fiber, update1);
let update2 = {name: "update2",  payload: (state) => ({ msg: state.msg + "B" }), lane: SyncLane };
enqueueUpdate(fiber, update2);
let update3 = {name: "update3",  payload: (state) => ({ msg: state.msg + "C" }), lane: SyncBatchedLane };
enqueueUpdate(fiber, update3);
let update4 = {name: "update4",  payload: (state) => ({ msg: state.msg + "D" }), lane: SyncLane };
enqueueUpdate(fiber, update4);
// 每次react 渲染会提供一个渲染的优先级，渲染的时候只会处理大于等于这个优先级的更新
processUpdateQueue(fiber, SyncLane)
console.log(fiber.memoizedState);

let update5 = {name: "update5",  payload: (state) => ({ msg: state.msg + "E" }), lane: SyncLane };
enqueueUpdate(fiber, update5);
processUpdateQueue(fiber, SyncLane);
console.log(fiber.memoizedState);

let update6 = {name: "update6",  payload: (state) => ({ msg: state.msg + "F" }), lane: SyncLane };
enqueueUpdate(fiber, update6);
// renderLanes Ob10 => 变成优先级大于等于它的 0b11
processUpdateQueue(fiber, 0b11);
console.log(fiber.memoizedState);

function output(updateQueue){
    let lastUpdate = updateQueue.shared.pending;
    let firstUpdate = lastUpdate.next;
    let str = "";
    do {
        str =str + firstUpdate.name+ "=>";
        firstUpdate = firstUpdate.next;
    } while (firstUpdate && (lastUpdate !== firstUpdate))
    str =str +lastUpdate.name
    console.log(str);
}
// output(fiber.updateQueue);