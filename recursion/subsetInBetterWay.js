

// finding subsets of all the elemetns what is 
str = "abc"
alph  = 'ghifj'
// console.log(alph.substring(1))
// console.log(alph)

function subsets(str,newStr){
    // console.log(str)
    if(str.length === 0){
        // console.log(str)
        console.log(newStr)
        return
    }
   let ch = str[0];
    // console.log(str)
    subsets(str.substring(1),newStr)
   
    subsets(str.substring(1), newStr + ch)

}

subsets(str,'')