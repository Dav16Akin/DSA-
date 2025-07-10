const stringReversal = (str) => {
  return str.split("").reverse().join("");
};

const integerReversal = (int) => {
  const reversed = int.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(int);
};

const capitalizeString = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

let testString = "boys again";
let testInt = -1234;

// console.log(capitalizeString(testString));
// console.log(integerReversal(testInt));

// console.log(stringReversal(testString));

const checkIfPalindrome = (str) => str.split("").reverse().join("") === str;

// console.log(checkIfPalindrome(testString));

const fizzbuzz = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzbuzz(20)

const arrayChuncks = (arr, size) => {
  const chuncked = [];
  let index = 0;

  while (index < arr.length) {
    const chunck = arr.slice(index, index + size);
    chuncked.push(chunck);
    index += size;
  }

  return chuncked;
};

// console.log(arrayChuncks([1, 2, 3, 4, 5, 6, 7], 3));

const isPalindrome = function (x) {
  const num = x.toString().split("").reverse().join("") * 1;
  return num === x;
};

// console.log(isPalindrome(121));

const isValidParenthesis = (str) => {
  const stack = [];

  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      let top = stack.pop();

      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// console.log(isValidParenthesis("(){}[]"));
// console.log(isValidParenthesis("((()))"));
// console.log(isValidParenthesis("({[]})"));
// console.log(isValidParenthesis("([)]"));
// console.log(isValidParenthesis("()"));
// console.log(isValidParenthesis("{"));

const reverseString = (str) => {
  const stack = [];

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";

  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
};

const reversedString = reverseString("hello world");

// console.log(reversedString);

const repeatWordsCount = (word) => {
  const stack = {};

  const words = word.toLowerCase().split(" ");

  for (const word of words) {
    if (word in stack) {
      stack[word]++;
    } else {
      stack[word] = 1;
    }
  }

  return stack;
};

let repeat = repeatWordsCount("Hello my name name name is john");

// console.log(repeat);

const twoSum = (nums, target) => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (compliment in numsMap && numsMap[compliment] !== i) {
      return [numsMap[compliment], i];
    }

    numsMap[nums[i]] = i;
  }

  return [];
};

const nums = [2, 5, 11, 15, 7];

const target = 9;

const result = twoSum(nums, target);

// console.log(result);


