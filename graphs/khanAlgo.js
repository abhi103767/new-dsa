

const { createAdjList, addEdge, addEdgeInDirGph, addEdgeInWeightUndirGph } = require('./adjList')
const numOfNodes = 5
const adjList = createAdjList(numOfNodes)
const visited = new Array(numOfNodes).fill(false)
const queue = []
// we are removing the element on the basis of weight

function rQ(queue) {
    let  min = Math.max(Infinity)
    let  minIndex = -1
    for (let i = 0; i < queue.length; i++) {
        const [des, weight] = queue[i]
        if (min > weight) {
            minIndex = i
            min = weight
        }
    }
    const curNode = queue[minIndex][0]
    const minWeight= queue[minIndex][1]
    queue.splice(minIndex, 1)
    console.log({queue})

    return [curNode, minWeight]
}


addEdgeInWeightUndirGph(adjList, 0, 4, 6)
addEdgeInWeightUndirGph(adjList, 0, 1, 2)

addEdgeInWeightUndirGph(adjList, 2, 3, 3)
addEdgeInWeightUndirGph(adjList, 3, 4, 5)
addEdgeInWeightUndirGph(adjList, 0, 3, 7)
addEdgeInWeightUndirGph(adjList, 1, 4, 4)
addEdgeInWeightUndirGph(adjList, 1, 2, 1)
addEdgeInWeightUndirGph(adjList, 2, 4, 2)

// starting algorithms from here
// we are findding minninim distance of spanning graphs
function solution(st,queue) {
    queue.push([0, 0])
    let ans = 0
    let curNode = st
    visited[curNode] = true
    while (queue.length !== 0) {
        const [curNode, weight] = rQ(queue)
        if(!visited[curNode]){
            ans += weight
        }
   
        visited[curNode] = true
        const neighbour = adjList[curNode]
        for (let i = 0; i < neighbour.length; i++) {
            const [neighbourNode, neighbourWeight] = neighbour[i]
            if (!visited[neighbourNode]) {
                queue.push([neighbourNode, neighbourWeight])
            }
        }
    }

    return ans
}

console.log(solution(0,queue))



