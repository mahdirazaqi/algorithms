function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  const pivot = arr[0];
  const less = arr.filter((item) => item < pivot);
  const greater = arr.filter((item) => item > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([4, 2, 6, 3, 8, 9, 5]));
