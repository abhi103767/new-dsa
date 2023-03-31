
class Solution {
    findPath(m,n){
        //code here
        
      const findingPath = (mat,r,c,ans) => {
       
    //    console.log(r,c)
          if(r < 0 || c < 0 || r === mat.length || c === mat[0].length || mat[r][c] === 0){
              return []
          }
          else if(r === mat.length -1 && c === mat[0].length - 1){
              return [ans]
          }
          
          // upper ans
          mat[r][c] = 0
          let leftAns = findingPath(mat,r,c-1,ans+'L')
          
          let rightAns = findingPath(mat,r,c+1,ans+'R')
          
          let upperAns = findingPath(mat,r-1,c,ans+'U')
          
          let lowerAns = findingPath(mat,r+1,c,ans+'D')
          mat[r][c] = 1
          
          
          return [...upperAns, ...lowerAns,...leftAns, ...rightAns]
          
      }
      
     let ans = findingPath(m,0,0,'')
      console.log({ans})
      if(ans.length === 0) return -1
      return ans.sort(() => -1)
        
    }
}

const solution = new Solution()
let matrix = [[1, 0, 1, 0]]
console.log(solution.findPath(matrix,1))
