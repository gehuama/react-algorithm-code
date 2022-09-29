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
 * @description: 深度优先遍历
 * @param {*} node
 * @return {*}
 */
function dfs(node){
    console.log(node.name);
    node.children && node.children.forEach(child => dfs(child));
}
dfs(root);