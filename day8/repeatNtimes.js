function repeatNtimes(str, num) {
  let out = "";
  for (let i = 0; i < num; i++) {
    out += str;
  }
  return out;
}

/* 
 ! RECURSION
function repeatNtimes(str, num) {
  if (num == 0) return "";
  return str + repeatNtimes(str, num - 1);
} */

console.log(repeatNtimes("abc", 3));
//should return abcabcabc
