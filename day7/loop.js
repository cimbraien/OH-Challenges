console.log("While loop");
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

console.log("For loop with break");
for (let i = 0; i <= 10; i++) {
  if (i == 5) break;
  console.log(i);
}

console.log("For loop with continue");
for (let i = 0; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}
