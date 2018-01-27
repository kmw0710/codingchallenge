/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
var findMedianSortedArrays = function(nums1, nums2) {
  let result = nums1.concat(nums2).sort((a,b) => {
    return a - b;
  })
  return result.length % 2 === 0 ? (result[result.length / 2] + result[result.length / 2 -1]) / 2 :
  result[Math.floor(result.length / 2)]
};

console.log(findMedianSortedArrays([1,2],[3,4]), 2.5);
console.log(findMedianSortedArrays([1,1],[1,2]), 1);
console.log(findMedianSortedArrays([1,3],[2]), 2);
