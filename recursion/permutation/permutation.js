
// a b c d e 



function permute(p,up){
    if(up.length === 0){
        return [p]
    }

  let ch = up[0]
  let ans = []
//   console.log({ch})
    for (let i = 0;i <= p.length; i++){
        let f = p.substring(0,i);
        let s = p.substring(i,p.length)

     ans = [...ans,...permute(f+ch+s,up.substring(1))]
    }
  
return ans
}

const a = 'abcdgd'
console.log(permute('','abcd'))