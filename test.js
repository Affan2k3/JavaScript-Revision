
//  List/Array of elements containing integer and string

const array = [0 + "ab", 6 + "cd", 0 + "ef", 6 + "gh", 4 + "ij", 0 + "lt", 1 + "pr", 2 + "pw",]

//  Implicit type casting will be applied here and elements will be converted into string

//  Getting the elements of first half
let firstHalfArray= array.slice(0, array.length/2)


let orderedObjectArray = []

//  Getting the integer value of the elements and making an array of objects including integer (x), string and originalValue (value) 

array.map((i) => {
   let data = {
        x: i.match(/(\d+)/)[0],
        string: i.replace(/\d+/g, ''),
        value:   i.match(/(\d+)/).input
    }
   orderedObjectArray.push(data)
})

//    ELements are ordered according to the integer value

orderedObjectArray.sort((a, b) => a.x - b.x)


let orderedArray = []

// Making an array of ordered value

orderedObjectArray.map((i)=>{
    orderedArray.push(i.value)
 }
)

    let filteredSecondhalf = [] // This is the final array


//  Filtering and replacing first half element into "-"

orderedArray.map((i) => {
    if (firstHalfArray.includes(i)
    ) {
        filteredSecondhalf.push("-")
        
    } else {
        filteredSecondhalf.push(i)
    }
})

// console.log(orderedArray)


// function printStringsInOrder(lst) {
//     // Create an object to store integers as keys and arrays of strings as values
//     var integerStringMap = {};

//     // Populate the object with integers and strings
//     for (var i = 0; i < lst.length; i++) {
//         var item = lst[i].split(' ');
//         var integer = parseInt(item[0]);
//         var string = item[1];
        
//         if (!integerStringMap[integer]) {
//             integerStringMap[integer] = [];
//         }
        
//         integerStringMap[integer].push(string);
//     }

//     // Print the strings in order of their accompanying integers
//     for (var key in integerStringMap) {
//         if (integerStringMap.hasOwnProperty(key)) {
//             var strings = integerStringMap[key];
//             for (var j = 0; j < strings.length; j++) {
//                 console.log(strings[j] + " ");
//             }
//         }
//     }
// }

// // Test the function
// var lst = ["0 ab", "0dh", "2djh", "1question", "4fdj"];
// printStringsInOrder(lst)




function printStringsInOrder(lst) {
    // Determine the index to replace elements with dashes
    var firstHalfLength = Math.ceil(lst.length / 2);

    // Replace the first half elements with dashes
    for (var i = 0; i < firstHalfLength; i++) {
        lst[i] = '-';
    }

    // Create an object to store integers as keys and arrays of strings as values
    var integerStringMap = {};

    // Populate the object with integers and strings from the modified list
    for (var i = 0; i < lst.length; i++) {
        var item = lst[i].split(' ');
        var integer = parseInt(item[0]);
        var string = item[1];
        
        if (!integerStringMap[integer]) {
            integerStringMap[integer] = [];
        }
        
        integerStringMap[integer].push(string);
    }

    // Print the strings in order of their accompanying integers
    for (var key in integerStringMap) {
        if (integerStringMap.hasOwnProperty(key)) {
            var strings = integerStringMap[key];
            for (var j = 0; j < strings.length; j++) {
                console.log(strings[j]);
            }
        }
    }
}

// Test the function
var lst = ["0 ab", "0 dh", "2 djh", "1 question", "4 fdj", "1 dsg", "3 jsd", "2 dsj"];
printStringsInOrder(lst);
