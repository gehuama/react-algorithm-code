const { NoLanes, isSubsetOfLanes, mergeLanes } = require("./ReactFiberLane")
function initializeUpdateQueue(fiber) {
    const queue = {
        baseState: fiber.memoizedState,
        // 存的是上次跳过的更新头
        firstBaseUpdate: null,
        // 存的是上次跳过的更新尾巴
        lastBaseUpdate: null,
        shared: {
            // 将要进行的更新队列，是一个循环链表
            pending: null
        }
    }
    fiber.updateQueue = queue;
}
/**
 * @description: 更新链表数据
 * 如图 循环链表.jpeg
 * @param {*} fiber
 * @param {*} update
 * @return {*}
 */
function enqueueUpdate(fiber, update) {
    const updateQueue = fiber.updateQueue;
    const sharedQueue = updateQueue.shared;
    const pending = sharedQueue.pending;

    // 第一次
    if (pending === null) {
        update.next = update;
    } else {
        update.next = pending.next;
        pending.next = update;
    }
    sharedQueue.pending = update;
}
/**
 * @description: 更新
 * @param {*} fiber
 * @param {*} renderLanes
 * @return {*}
 */
function processUpdateQueue(fiber, renderLanes) {
    const queue = fiber.updateQueue;
    let firstBaseUpdate = queue.firstBaseUpdate;
    let lastBaseUpdate = queue.lastBaseUpdate;
    let pendingQueue = queue.shared.pending
    if (pendingQueue !== null) {
        // 清空
        queue.shared.pending = null;
        const lastPendingUpdate = pendingQueue; // update4
        const firstPendingUpdate = lastPendingUpdate.next; // update1
        lastPendingUpdate.next = null;
        if (lastBaseUpdate === null) {
            firstBaseUpdate = firstPendingUpdate;
        } else {
            // TODO
            lastBaseUpdate.next = firstPendingUpdate;
        }
        lastBaseUpdate = lastPendingUpdate
    }
    // 计算新的状态
    if (firstBaseUpdate !== null) {
        let newState = queue.baseState;
        let newLanes = NoLanes; // fiber 新的车道
        let newBaseState = null; // 新的基础状态
        let newFirstBaseUpdate = null; // 新的第一个更新
        let newLastBaseUpdate = null; // 新的最后一个更新
        let update = firstBaseUpdate; // update1
        do {
            const updateLane = update.lane; // 2 车道
            // 如果本次渲染的车道不包括此更新的车道
            // renderLanes 0b10 updateLane =0b01
            if (!isSubsetOfLanes(renderLanes, updateLane)) {
                const clone = {
                    lane: updateLane,
                    payload: update.payload
                }
                // 说明是第一次跳过本次不处理的更新
                if (newLastBaseUpdate === null) {
                    // 新的头、尾指向 克隆部分
                    newFirstBaseUpdate = newLastBaseUpdate = clone;
                    // 新的基本状态 指向 新状态
                    newBaseState = newState;
                } else {
                    newLastBaseUpdate = newLastBaseUpdate.next = clone;
                }
                newLanes = mergeLanes(newLanes, updateLane);
            } else {
                // 如果有跳过的更新了，本次更新还需要添加到新的更新链表里的
                if (newLastBaseUpdate !== null) {
                    const clone = {
                        lane: updateLane,
                        payload: update.payload
                    }
                    newLastBaseUpdate = newLastBaseUpdate.next = clone;
                }
                newState = getStateFromUpdate(update, newState);
            }
            update = update.next;
        } while (update);
        // 如果没有newLastBaseUpdate,说明没有被跳过的更新，所有的更新本次全部处理了
        if(!newLastBaseUpdate){
            newBaseState = newState;
        }
        //
        queue.baseState = newBaseState; // {msg: ""}
        queue.firstBaseUpdate = newFirstBaseUpdate; // update1
        queue.lastBaseUpdate = newLastBaseUpdate;
        fiber.lanes = newLanes; // lanes放着本fiber年剩下的还没能重的更新对应车道 0b10
        fiber.memoizedState = newState; // {msg: "BD"}
    }
}

function getStateFromUpdate(update, prevState) {
    const payload = update.payload;
    let newState = payload(prevState);
    return Object.assign({}, prevState, newState)
}
module.exports = {
    initializeUpdateQueue,
    enqueueUpdate,
    processUpdateQueue
}