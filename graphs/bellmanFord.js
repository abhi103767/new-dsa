
// finding the weight gph
const { createAdjList, addEdge, addEdgeInWeightGph, addEdgeInWeightUndirGph } = require('./adjList')
const numOfNodes = 3
const adjList = createAdjList(numOfNodes)
const visited = new Array(numOfNodes).fill(false)
const distance = new Array(numOfNodes).fill(Infinity)
distance[0] = 0
addEdgeInWeightGph(adjList, 0, 1, 1)
addEdgeInWeightGph(adjList, 1, 2, 1)

addEdgeInWeightGph(adjList, 0, 2, -7)

console.log({adjList})


const edges = []
for (let i = 0; i< adjList.length;i++){
  const neighbour = adjList[i]
  for (let j = 0; j < neighbour.length;j++){
    const [connectedNode, weight] = neighbour[j]
    edges.push([i,connectedNode,weight])
  }
}

console.log({edges})



function checkingDistance(numOfNodes){
    for ( let i = 1 ; i < numOfNodes; i++){
      updatingDistance(edges,distance)
    }
    const ans = [...distance]
 // extra checking to find out negativve weight cycle.
 
   console.log(distance.join(' ') === ans.join(' '))

}
function updatingDistance(edges,distance){


    for (let i = 0; i < edges.length; i++){
        const [src,des,weight] = edges[i]
        console.log({weight,src})
        if(distance[des] > distance[src] + weight){
           distance[des] = distance[src] + weight
        }

        
    }

}

checkingDistance(numOfNodes)
console.log({distance})

