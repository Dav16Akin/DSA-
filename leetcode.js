var singleNumber = function (nums) {
  let stack = [];
  let index = 1;

  stack.push(nums[0]);

  while (nums.length > index) {
    if (nums[index] === stack[0]) {
      stack.pop();
    }
    
    if (stack.length === 0 && nums[index] !== stack[0]) {
      stack.push(nums[index]);
    }

    console.log("stack:  ", stack);

    index++;
  }

  return stack;
};

console.log(singleNumber([2, 2, 1]));