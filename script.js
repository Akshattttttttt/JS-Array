console.log("1. Join Elements:");
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));      
console.log(myColor.toString());     
console.log(myColor.join("+"));      
console.log("\n");

console.log("2. Most Frequent Element:");
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freq = {};
let maxElem = arr1[0], maxCount = 1;

for (let el of arr1) {
  freq[el] = (freq[el] || 0) + 1;
  if (freq[el] > maxCount) {
    maxCount = freq[el];
    maxElem = el;
  }
}
console.log(`${maxElem} ( ${maxCount} times )`);
console.log("\n");

console.log("3. Truncate String:");
function truncateString(str, num) {
  return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4));
console.log("\n");

console.log("4. Capitalize Words:");
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords('js string exercises'));
console.log("\n");

console.log("5. Array Between:");
function arrBetween(min, max, arr) {
  return arr.filter(num => num > min && num < max);
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));    // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78]));         // []
console.log("\n");

console.log("6. Find Index:");
function findIndex(arr, target) {
  return arr.indexOf(target);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));         
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));     
console.log(findIndex(["a", "g", "y", "d"], "d"));                    
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
