

// find subsets
let arr = [1,2,3,4,5]
let ans = [ []]



for ( let i = 0;i < arr.length; i++){
    
    let end = ans.length ;
    for ( let j = 0; j < end; j++){
       
        // console.log(j)
        let newAns = [...ans[j]]
      
        newAns.push(arr[i])
  
        ans.push(newAns)
    }
  
}
console.log(ans)
