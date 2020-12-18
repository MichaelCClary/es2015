// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
// [1,2,3,4]

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")
//"ref"

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
//Map(2) {Array(3) => true, Array(3) => false}
// [[Entries]]
// 0: {Array(3) => true}
// key: (3) [1, 2, 3]
// value: true
// 1: {Array(3) => false}
// key: (3) [1, 2, 3]
// value: false
// size: (...)

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => { return arr.length !== [...new Set(arr)].length }

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = (str) => {
    let arr = str.toLowerCase().split('');
    vowels = new Map();
    for (let char of arr) {
        if ('aeiou'.includes(char)) {
            if (!vowels.has(char)) { //if not in object, adds 1 to it in object
                vowels.set(char, 1);
            } else {
                let temp = vowels.get(char) + 1;                           //if in object, adds 1 to it in object
                vowels.set(char, temp);
            }
        }
    };
    return vowels;
};



vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }