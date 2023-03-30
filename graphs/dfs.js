const {createAdjList, addEdge} = require('./adjList')

const adjList = createAdjList(6)


addEdge(adjList,1,5)
addEdge(adjList,2,3)
addEdge(adjList,3,4)
addEdge(adjList,1,0)
addEdge(adjList,1,2)
console.log({adjList})


const numOfNodes = 6

let visited = new Array(numOfNodes).fill(false)
let distance = new Array(numOfNodes).fill(Infinity)
let parent = new Array(numOfNodes).fill(-1)
let ans = []


for (let i = 0;i < visited.length; i++){
    if(!visited[i]){
        ans.push(i)
        distance[i] = 0
        dfsTransversal(adjList,i)
    }
}

function dfsTransversal (adjList,node) {
    visited[node] = true
    const neighbour = adjList[node]
    for ( let i = 0;i < neighbour.length ;i++ ){
        const neighbourNode = neighbour[i]
        if(!visited[neighbourNode]){
            ans.push(neighbourNode)
            distance[neighbourNode] = distance[node] + 1
            parent[neighbourNode] = node
            dfsTransversal(adjList,neighbourNode)
        } 
    }
    
}
console.log(ans,distance,parent)
