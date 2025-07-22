var singleNumber = function (nums) {
  let stack = [];
  let index = 1;

  stack.push(nums[0]);

  while (nums.length > index) {
    if (stack.length === 0 || stack === undefined) stack.push(nums[index]);

    if (nums[index] !== stack[0]) {
      stack.push(nums[index]);
    }

    console.log("stack1:  ", stack);

    console.log(index);

    if (nums[index] === stack[0]) {
      stack.pop();
    }

    console.log("stack2:  ", stack);

    index++;
  }

  return stack;
};

// console.log(singleNumber([4,1,2,1,2]));

const perfectNumber = (n) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let add = [];
  let sum;

  let index = 0;
  if (n) {
    while (n % arr[index] !== 0) {
      let num = Math.floor(n / arr[index]);
      console.log(num);
      add.push(num);

      index++;
    }
  }

  for (let i = 0; i < add.length; i++) {
    sum += add[i];
  }

  if (sum === n) {
    return true;
  } else {
    return false;
  }
};

// console.log(perfectNumber(28));

var makeFancyString = function (s) {
  let stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    stack.push(s[i]);
    if (s[i - 1] === s[i + 1] && s[i] === s[i + 1]) {
      stack.pop();
    }
  }

  return stack.join("").toString();
};

// console.log(makeFancyString("aabaabaabaa"));

var isEmpty = function (obj) {
  console.log(Array.isArray(obj));

  return Array.isArray(obj).length == 0 ?? Object.keys(obj).length == 0;
};

// console.log(isEmpty([{"length": 0}]));

var maximumUniqueSubarray = function (nums) {
  let stack = [];
  stack.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (stack.indexOf(nums[i]) < 0) {
      stack.push(nums[i]);
      console.log(stack);
      
    }
  }

  return stack.reduce((prev, current) => prev + current, 0);
};

// console.log(
//   maximumUniqueSubarray([
//     187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411,
//     459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610,
//     31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670,
//     476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434,
//   ])
// );
