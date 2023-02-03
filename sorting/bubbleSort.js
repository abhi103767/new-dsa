


// make bigger value  to rightest part of array

let arr = [5, 1, 4, 2, 8]

for(let i = 0;i < arr.length;i++){

    for(let j = i+1;j < arr.length; j++){
     if(arr[j-1]  > arr[j]){
       [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
     }
    }
}
console.log(arr)


