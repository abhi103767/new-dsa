
const arr = [1,2,2,4]


// Recursion Approach

function subset(arr,newArr,mapping){
    // console.log(arr)

    if( arr.length === 0){
        // console.log('hi')
 
        if(!mapping[newArr.join('')]){
            mapping[newArr.join('')] = 1
        }
        else {
            return [null]
        }
      
         return [newArr]
    }
    let ch  = arr[0]
const newItems = arr.filter((item,i) => i != 0)

   const left =  subset(arr.filter((item,i) => i != 0),[...newArr,ch],mapping)
   const right = subset(arr.filter((item,i) => i != 0),[...newArr],mapping)
//   console.log({left,right})
   return [...left,...right]

}

console.log(subset(arr,[],{}))