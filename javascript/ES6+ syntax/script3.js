const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));





