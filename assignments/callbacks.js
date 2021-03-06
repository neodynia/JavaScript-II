const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

function firstItem(arr, cb) {
  cb(arr[0]);
}

firstItem(items, function(first) {
  console.log(first);
});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

last(items, function(lastitem) {
  console.log(lastitem);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  cb(sum);
}

sumNums(2, 4, function(sum) {
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  cb(product);
}

multiplyNums(3, 5, function(product) {
  console.log(product);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (item of list) {
    return list.includes(item) ? cb(true) : cb(false);
  }
}
contains(item, items, function(boolval) {
  console.log(boolval);
});
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let deDuped = [];
  for (let i = 0; i < array.length; i++) {
    if (deDuped.indexOf(array[i]) === -1) {
      deDuped.push(array[i]);
    }
  }

  cb(deDuped);
}
