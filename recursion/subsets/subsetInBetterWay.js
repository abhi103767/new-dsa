

// finding subsets of all the elemetns what is 
str = "abc"
alph  = 'ghifj'
// console.log(alph.substring(1))
// console.log(alph)

function subsets(str,newStr){
    // console.log(str)
    if(str.length === 0){
       
        let ans = [newStr]
        return [ans]
    }
   let ch = str[0];
    // console.log(str)
   let left =  subsets(str.substring(1),newStr)
   
  let right =  subsets(str.substring(1), newStr + ch)

  return [...left,...right]

}

console.log(subsets(str,''))