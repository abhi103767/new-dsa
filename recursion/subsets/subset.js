

let arr = [1,3,4,5,3]
// 0 1 2 3 4
// 0 1 2 3 4 
// 1 2 3 4 5




let sequenceOfSubset = []

function subsets (arr,cur,ans){
   if(ans.length >= 0){
    sequenceOfSubset.push([...ans])
   }
    for ( let i = cur; i < arr.length; i++){
        ans.push(arr[i])
        subsets(arr,i+1,ans)
        ans.pop()
    }
}
subsets(arr,0,[])
console.log(sequenceOfSubset)