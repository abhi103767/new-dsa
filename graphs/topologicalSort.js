const { createAdjList, addEdge, addEdgeInDirGph } = require('./adjList')
const numOfNodes = 6
const adjDirGphList = createAdjList(numOfNodes)
const visited = new Array(numOfNodes).fill(false)
const parent = new Array(numOfNodes).fill(-1)



const stk = []


addEdgeInDirGph(adjDirGphList, 0, 3)
addEdgeInDirGph(adjDirGphList, 0, 2)
addEdgeInDirGph(adjDirGphList, 2, 3)
addEdgeInDirGph(adjDirGphList, 2, 1)
addEdgeInDirGph(adjDirGphList, 3, 1)
addEdgeInDirGph(adjDirGphList, 5,1)
addEdgeInDirGph(adjDirGphList, 1,4)
addEdgeInDirGph(adjDirGphList, 5,4)


console.log({ adjDirGphList })

const topoLogiSort = []
// for (let i = 0; i < numOfNodes; i++) {
//     if (!visited[i]) {
//         const ans = dfs(adjDirGphList, i, visited)
//         topoLogiSort.push(...ans)
//     }
// }
topoLogiSort.reverse()
console.log({ topoLogiSort })

function dfs(adjDirGphList, curNode, visited) {
    visited[curNode] = true
    const neighbour = adjDirGphList[curNode]

    if (neighbour.length === 0) return [curNode]
    let ans = []
    for (let i = 0; i < neighbour.length; i++) {
        const neighbourNode = neighbour[i]
        if (!visited[neighbourNode]) {
            ans = [...ans, ...dfs(adjDirGphList, neighbourNode, visited)]
        }
    }
    ans.push(curNode)
    return ans
}

// bfs approach and also khan's algorithms


const inDegree = new Array(numOfNodes).fill(0)

for (let i = 0; i < adjDirGphList.length; i++) {
    const neighbour = adjDirGphList[i];
    for (let j = 0; j < neighbour.length; j++) {
        const neighbourNode = neighbour[j]
        inDegree[neighbourNode] = inDegree[neighbourNode]+1;
    }
}

console.log({inDegree})

let ans = []

for (let i = 0; i < inDegree.length ; i++){
    if(inDegree[i] === 0 && !visited[i]){
        const queue = [i]
        bfs(adjDirGphList,queue,visited,ans)
    }
}
console.log(ans)



function bfs(adjDirGphList, queue, visited,ans) {

    while (queue.length !== 0) {
        const curNode = queue.shift()
        ans.push(curNode)
        visited[curNode] = true
        const neighbour = adjDirGphList[curNode]
        for (let i = 0; i < neighbour.length; i++) {
            const neighbourNode = neighbour[i]
            if (!visited[neighbourNode]) {
                inDegree[neighbourNode] = inDegree[neighbourNode] - 1
                if (inDegree[neighbourNode] === 0) {
                    queue.push(neighbourNode)
                }
            }

        }

    }

}





