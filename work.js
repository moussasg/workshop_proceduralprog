const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
function prod(arr1, arr2) {  
    return arr1.map((x, i) => x * arr2[i]).reduce((a, b) => a + b);
  } 
  const result = prod(arr1, arr2);
  console.log(result);
  