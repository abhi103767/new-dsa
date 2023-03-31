
var permute = function(nums) {
 let ans = []
 let permutationThroughSwapping = (arr,cur) => {
     if(cur === arr.length - 1){
         console.log({arr})
         ans.push([...arr])
         return 
     }
   for(let i = cur; i < arr.length; i++){
       [arr[i],arr[cur]] = [arr[cur],arr[i]]
       permutationThroughSwapping(arr,cur+1)
       console.log(arr[i])
       [arr[i],arr[cur]] = [arr[cur],arr[i]]

   }

   return 
 }
 
 permutationThroughSwapping(nums,0)
return ans

};

permute([1,2,3])