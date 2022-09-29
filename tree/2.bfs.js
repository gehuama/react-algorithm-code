let root = {
    name: "A",
    children: [
        {
            name: "B",
            children: [
                { name: "B1" },
                { name: "B2" }
            ]
        },
        {
            name: "C",
            children: [
                { name: "C1" },
                { name: "C2" }
            ]
        }
    ]
}

/**
 * @description: 广度优先遍历
 * @param {*} node
 * @return {*}
 */
function bfs(node){
    let stack = [];
    stack.push(node);
    let current;
    while(current =  stack.shift()){
        console.log(current.name);
        current.children && current.children.forEach(child => stack.push(child));
    }
}
bfs(root);
