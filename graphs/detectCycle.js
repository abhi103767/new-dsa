const {createAdjList, addEdge} = require('./adjList')
const numOfNodes = 6
const adjList = createAdjList(numOfNodes)
const visited = new Array(numOfNodes).fill(false)
const parent = new Array(numOfNodes).fill(-1)




addEdge(adjList,1,5)
addEdge(adjList,2,3)
addEdge(adjList,3,4)
addEdge(adjList,1,0)
addEdge(adjList,2,4)

// addEdge(adjList,1,2)
// addEdge(adjList,4,5)
// console.log({adjList})

let isCycleDetected = false
for(let i = 0; i < visited.length; i++){
    if(!visited[i]){
    
     if(findingCycle(adjList,visited,i,parent)){
        isCycleDetected = true
     }
    }
}






function findingCycle(adjList,visited,curNode,parent){
 
  visited[curNode] = true
  const neighbour = adjList[curNode]
  for(let i = 0; i < neighbour.length; i++){
    const neighbourNode = neighbour[i]
    
    if(visited[neighbourNode] && neighbourNode !== parent[curNode] ){
        return true
    }
    if(!visited[neighbourNode]){
        parent[neighbourNode] = curNode
        if(findingCycle(adjList,visited,neighbourNode,parent)){
            return true
        }
    }
  }
  return false

}

console.log(isCycleDetected)