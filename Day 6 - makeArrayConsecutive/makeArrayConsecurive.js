/*
George got statues of different sizes as a present from CodeMaster for his birthday, each statue having a non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

• For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive(statues) = 3
*/

function makeArrayConsecutive(nums) {
  let counter = 0
  let sortedNums = nums.sort((a, b) => a - b)
  const min = sortedNums[0]
  const max = sortedNums[sortedNums.length -1]
  
  for(let i = min; i < max; i++) {
    if(!sortedNums.includes(i)) {
      counter ++
    }
  }
  return counter
}
