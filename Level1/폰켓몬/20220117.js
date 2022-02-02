const nums = [3, 1, 2, 3];


const solution = (nums) => {
    return Math.min(new Set(nums).size, nums.length / 2)
}