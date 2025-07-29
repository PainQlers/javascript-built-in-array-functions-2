function isPalindrome(string) {
  // Start coding here
  let split = string.split("").reverse().join("").trim()
  if (split === string) {
    return true
  } else {
    return false
  }
  
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false