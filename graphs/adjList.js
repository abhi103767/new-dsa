
const createAdjList = (numOfNodes) => {

    return new Array(numOfNodes).fill(null).map(() => [])
 }
 
 
 
const  addEdge = (adjList,N1,N2) => {
    adjList[N1].push(N2)
    adjList[N2].push(N1)
    return 
}
module.exports =  {createAdjList,addEdge}
 