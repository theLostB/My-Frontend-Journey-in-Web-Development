//Array
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(arr.length)
//Indexing of Arrays
console.log(arr[0])
let ln = arr.length
for (let i = 0; i < ln; i++) {
    console.log(arr[i])
}
//Changing Array Value
arr[0] = 5999;
console.log(arr[0]);
//Type of Array is Object
console.log(typeof arr);

//ARRAY METHODS

// To string method
// It converts an array to the string into comma separated values
console.log(arr.toString());

// Join method
// It joins all the array elements using a separator
console.log(arr.join(' and '));

// Pop method
// It removes the last element of the array
console.log(arr.pop()); //Now it removes the Last element
console.log(arr);

// Push method
// It appeds the given input as the last element of the array
console.log(arr.push(7));
console.log(arr.push("Harry"));
console.log(arr)

// Shift method
// It removes the first element from the array
console.log(arr.shift()) //Now first element is removed
console.log(arr)

// Unshift method
// It appends the given input as the first element
console.log(arr.unshift(1)) //Add 1 as first element and print the size of array
console.log(arr)

// Delete method
// It deletes the element value but the memory is still allocated
console.log(delete arr[0])
delete arr[2]
console.log(arr)

// Concat method
// It will create ew array that are mixture of given array for concatenating
arr1 = [35, 6536, "gzhhs", 755]
arr2 = [532, 963, "ggchht", 944]
console.log(arr.concat(arr1, arr2))

// Reverse method
// It reverses the array elements
console.log(arr.reverse())