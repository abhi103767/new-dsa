

// looking the minnimum element in array
// then swap minnimum element left with current index

arr = [1,-2,4,-5,7,-8]
for (let i = 0;i < arr.length; i++){
    
    let minIndex = i
    for ( j = i+1; j < arr.length ; j++){
       // looking for minIndex
      if(arr[minIndex] > arr[j]){
        minIndex = j
      }
    }

   
    // console.log(i,minIndex)

  [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
}

console.log(arr)
