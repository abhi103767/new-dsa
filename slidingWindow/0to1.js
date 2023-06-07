/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let max = 0
  let noOfZeros = 0
  let i = 0
  let j = 0
  while( i !== nums.length  &&  j !== nums.length){
    // console.log(max,noOfZeros)
      if(noOfZeros !== k){
          if(nums[j] === 0) noOfZeros = noOfZeros + 1
          j++;
      }
      else if(noOfZeros === k){
        max = Math.max(max,j-i)
        if(nums[j] === 1){
            j++;
        }
        else if(nums[i] === 0) {
            noOfZeros--;
            i++;
        }
        
       else i++
       if( j === nums.length ){
        max = Math.max(max,j-i)
       }
       
      }
      
  }
  if(noOfZeros === k){
    max  = Math.max(max,j-i)
  }
  return max
};


console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],5))