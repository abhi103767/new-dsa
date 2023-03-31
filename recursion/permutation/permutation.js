
// a b c d e 



function permuteList(p,up){
    if(up.length === 0){
        return [p]
    }

  let ch = up[0]
  let ans = []
//   console.log({ch})
    for (let i = 0;i <= p.length; i++){
        let f = p.substring(0,i);
        let s = p.substring(i,p.length)

     ans = [...ans,...permuteList(f+ch+s,up.substring(1))]
    }
  
return ans
}

const a = 'abcdgd'
// console.log(permuteList('','abcd'))



function permuteCount(p,up){
    if(up.length === 0){
        return 1
    }

  let ch = up[0]
  let count = 0
//   console.log({ch})
    for (let i = 0;i <= p.length; i++){
        let f = p.substring(0,i);
        let s = p.substring(i,p.length)
       count = count + permuteCount(f+ch+s,up.substring(1))
    }
  
return count
}

console.log(permuteCount('','abc1234'))