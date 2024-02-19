"use strict";
// let username = 'Giga'
// console.log(username)
// let a: number = 12
// let b: number = 6
// let c: number = 2
// console.log( a / b)
// console.log(c * b)
/**  lesson 2 */
// let myName: string = 'Gedeon'
// let meaningOfLife: number
// let isLoading: boolean
// let album: any
// myName = 'john'
// meaningOfLife = 42
// isLoading = true
// album = 1984
// const sum = (a:string, b:number) => {
//     return a + b
// }
// let postId: string | number 
// let isActive: number | boolean 
// let re: RegExp = /\w+/g
/** lesson 3 */
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Giga',
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ['I', "II", 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(evh));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 5] = "U";
    Grade[Grade["D"] = 6] = "D";
    Grade[Grade["C"] = 7] = "C";
    Grade[Grade["B"] = 8] = "B";
    Grade[Grade["A"] = 9] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C);
