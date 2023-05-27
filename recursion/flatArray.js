

const arr = [1,[2,3,4,[5,5,[11,34,55,54,[34,65,34,[12,32]]]]],7,[2,3,4,[5,5,[11,34,55,54,[34,65,34,[12,32]]]]]]


function flatArr(arr){
    let newArr = []
    for (let  i = 0; i < arr.length; i++){
       if(Array.isArray(arr[i])){
         newArr = [...newArr,...flatArr(arr[i])]
       }
      else {
        newArr.push(arr[i])
      }
    }
 return newArr
}

console.log(flatArr(arr))