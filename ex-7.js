function isPalindrome(string) {
  // Start coding here
  const trimStr = string.trim();               // ตัดช่องว่างหน้าหลัง
  const reverseStr = trimStr.split('').reverse().join('');
  return trimStr === reverseStr;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false