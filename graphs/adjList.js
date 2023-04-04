
const createAdjList = (numOfNodes) => {

    return new Array(numOfNodes).fill(null).map(() => [])
 }
 
 
 
const  addEdge = (adjList,N1,N2) => {
    adjList[N1].push(N2)
    adjList[N2].push(N1)
    return 
}

const addEdgeInDirGph = (adjList,src,des) =>{
    adjList[src].push(des)
}

const addEdgeInWeightGph  = (adjList,src,des,weight) => {
    adjList[src].push([des,weight])
}
const addEdgeInWeightUndirGph  = (adjList,src,des,weight) => {
    adjList[src].push([des,weight])
    adjList[des].push([src,weight])
}
module.exports =  {createAdjList,addEdge,addEdgeInDirGph,addEdgeInWeightUndirGph,addEdgeInWeightGph}
 