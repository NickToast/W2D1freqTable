/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
// {}
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    const freqTable = {}
    //iterate through string
    for(let i = 0; i < arr.length; i++){
        //if statement, if key name is there, counter +1 to the key:value pair
        if (freqTable[arr[i]] > 0){
            freqTable[arr[i]] += 1;
        }
        //else, create new object
        else {
            freqTable[arr[i]] = 1;
        }
    }
    return freqTable;
}

console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));