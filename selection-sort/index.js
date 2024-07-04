const list = [10, 15, 8, 2, 4, 3, 7, 12, 52, 6, 17];

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);

    arr = arr.filter((value, key) => key !== smallest);
  }

  return newArr;
}

console.log(selectionSort(list));
