// const arr = [
//   {
//     id: 1,
//     name: 'John',
//     isBool: false,
//     subArr: [
//       {
//         id: 11,
//         name: 'John11',
//         isBool: false,
//         subArr: [
//           { id: 111, name: 'John111', isBool: true },
//           { id: 111, name: 'Doe111', isBool: false },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Brait',
//     isBool: false,
//     subArr: [
//       {
//         id: 21,
//         name: 'Brait21',
//         isBool: false,
//         subArr: [
//           { id: 211, name: 'Brait211', isBool: false },
//           { id: 111, name: 'Doe211', isBool: true },
//         ],
//       },
//     ],
//   },
// ];
// //interview question--> print all objects having isBool true including nested arrays
// function printTrueObjects(array) {
//   array.forEach(item => {  //=> symbol means arrow function
//     if (item.isBool) {
//       console.log(item); // print the object if isBool is true
//     }
//     if (item.subArr) {
//       printTrueObjects(item.subArr); // recursive call for nested arrays
//     }
//   });
// }

// printTrueObjects(arr);


//making all elements of array flat
// const arr = [1,2,3,[4,5,6,[7,8],9],10];
// console.log(arr.flat(3));


