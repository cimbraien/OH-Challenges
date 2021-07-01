function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  arr.forEach((arr2) => {
    arr2.forEach((n) => {
      product *= n;
    });
  });
  // Only change code above this line
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
//multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
