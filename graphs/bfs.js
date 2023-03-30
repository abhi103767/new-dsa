




const createAdjList = (numOfNodes) => {

   return new Array(numOfNodes).fill(null).map(() => [])
}

const adjList = createAdjList(6)

console.log({adjList})




const  addEdge = (N1,N2) => {
    adjList[N1].push(N2)
    adjList[N2].push(N1)
    return 
}

addEdge(1,5)
addEdge(2,3)
addEdge(3,4)
addEdge(1,0)



function bfs (adjList,numOfNodes){
let queue = []
const node = 0
let visited = new Array(numOfNodes).fill(false)
let distance = new Array(numOfNodes).fill(Infinity)
let parent = new Array(numOfNodes).fill(-1)





let component = 0

for ( let i = 0; i < visited.length; i++){
    if(!visited[i]){
        queue.unshift(i)
        distance[i] = 0
        component++
        visitingOperation()
    } 

}
console.log({component})
function visitingOperation(){
    while(queue.length != 0){
        const curNode = queue.shift()
         if(!visited[curNode]){
             const neighbour = adjList[curNode]
           for ( let i = 0;i < neighbour.length;i++){
             let neighbourNode = neighbour[i]
             if(!visited[neighbourNode]){
                 queue.push(neighbourNode)
                 distance[neighbourNode] = distance[curNode] + 1
                 parent[neighbourNode] = curNode
             }
           } 
           visited[curNode] = true
         }
     }
}

console.log(visited,distance,parent)
}

bfs(adjList,6)




