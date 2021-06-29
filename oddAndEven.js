let odd = [];
let even = [];
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 ? even.push(i) : odd.push(i);
}
console.log("Odd numbers :");
console.log(odd);
console.log("Even numbers :");
console.log(even);
