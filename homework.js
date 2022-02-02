// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.


console.log("QUESTION 1...................................................")
function remove(array, elementToExclude) {
    console.log("The element being loaded in is: " + array)   //prints the array being fed into this function from the test
    console.log("The element to exclude is: " + elementToExclude)
    for (let i=0; i<=array.length; i++) {
        console.log("Value of i is : " + i)
        console.log("The element at i is: " + array[i])
        if (elementToExclude === array[i]) {
            array.splice(i,1)
        } else {
            console.log("This value is a keeper and will stay in array")
        }
    }
    return array;
}






// // Class Example
// // write a function that takes an array of numbers and returns only the first number  and last number
// function rickyBobby(array) {
//     let ifYouAintFirst = array.shift()
//     let urLast = array.pop()
//     let newArray = [ifYouAintFirst, urLast]

//     return newArray
// }

// let numArray = [1,2,3,4,5,6,7]
// alert(rickyBobby(numArray))
// //End of example


// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.


console.log("QUESTION 2...................................................")

function remove (students, name) {
    let newArray = []
    // console.log(students)
    for (let student of students) {
        if (student != name) {
            newArray.push(student)
        }  
        console.log(newArray)
    }
    return newArray
}






// Not sure why this one didn't work!?!

// function remove(newArray, elementToExclude) {
//     let array = newArray
//     console.log("The element being loaded in is: " + array)   //prints the array being fed into this function from the test
//     console.log("The element to exclude is: " + elementToExclude)
//     for (let i=0; i<=array.length; i++) {
//         console.log("Value of i is : " + i)
//         console.log("The element at i is: " + array[i])
//         if (elementToExclude === array[i]) {
//             array.splice(i,1)
//             console.log("This element was removed.  New array is: " + array)
//         } else {
//             console.log("This value is a keeper and will stay in array")
//         }
//     }
//     return array;
// }



// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
console.log("QUESTION 3...................................................")
function sum(numArray) {
    let sum = 0
    for(let num of numArray) {
        sum = sum + num
    }
    return sum
}


// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numbs) {
    let average = 0 
        for(let single of numbs) {
            return average =  sum(numbs) / (numbs.length) 
        }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(array) {
    let minValue = minimum(array)


    return minValue
}







    // let lowNum = 10000000
    // for (let j=0; j<array.length; j++) {
    //     if (array[i]<=lowNum) {
    //         lowNum = array[i]
    //     } else {
    //         return lowNum
    //     }
    // }

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
