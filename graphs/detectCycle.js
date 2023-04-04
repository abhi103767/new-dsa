const {createAdjList, addEdge,addEdgeInDirGph} = require('./adjList')
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
// for(let i = 0; i < visited.length; i++){
//     if(!visited[i]){
    
//      if(findingCycle(adjList,visited,i,parent)){
//         isCycleDetected = true
//      }
//     }
// }






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


// cycle in directed graph
// we have to maintain extra recursion stack for it.
const adjDirGphList = createAdjList(numOfNodes)



const recStk = new Array(numOfNodes).fill(false)

addEdgeInDirGph(adjDirGphList,0,1)
addEdgeInDirGph(adjDirGphList,1,0)
addEdgeInDirGph(adjDirGphList,3,2)
addEdgeInDirGph(adjDirGphList,2,1)

console.log({adjDirGphList})
let cycInDirGph = false

for(let i = 0; i < visited.length; i++){
    if(!visited[i]){
     if(findCycInDirGrph(adjDirGphList,visited,i,recStk)){
        cycInDirGph = true
     }
    }

}
console.log({cycInDirGph,component})


function findCycInDirGrph (adjDirGphList,visited,curNode,recStk)  {
   visited[curNode] = true
   recStk[curNode] = true

   const neighbour = adjDirGphList[curNode]
   for(let i = 0; i < neighbour.length; i++){
    let neighbourNode = neighbour[i]
    if(!visited[neighbourNode]){
        if(findCycInDirGrph(adjDirGphList,visited,neighbourNode,recStk)) return true
    }
 
    else if(recStk[neighbourNode]){
      return true
    }

   }
   recStk[curNode] = false

   return false
}