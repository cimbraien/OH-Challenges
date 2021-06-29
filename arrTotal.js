//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

var myArr = [2, 3, 4, 5, 6];

// Only change code below this line

//total should equal 20.

//Sol 1
let total = 0;
myArr.forEach((n) => {
  total += n;
});
console.log("Total :", total);

//Sol 2
total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log("Total :", total);
