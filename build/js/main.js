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
// let stringArr = ['one', 'hey', 'Dave']
// let guitars = ['Strat', 'Les Paul', 5150]
// let mixedData = ['EVH', 1984, true]
// stringArr[0] = 'John'
// stringArr.push('hey')
// guitars[0] = 1984
// guitars.unshift('Jim')
// guitars = stringArr
// mixedData = guitars
// let test = []
// let bands: string[] = []
// bands.push('Van Halen')
// // Tuple
// let myTuple: [string, number, boolean] = ['Dave', 42, true]
// let mixed = ['John', 1, false]
// myTuple[1] = 42
// let myObj: object
// myObj = []
// console.log(typeof myObj)
// myObj = bands
// myObj = {}
// const exampleObj = {
//     prop1: 'Giga',
//     prop2: true
// }
// exampleObj.prop2 = false
// interface Guitarist {
//     name?: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
// let evh: Guitarist = {
//     name: "Eddie",
//     active: false,
//     albums: [1984, 5150, 'OU812']
// }
// let jp: Guitarist = {
//     name: "Jimmy",
//     active: true,
//     albums: ['I', "II", 'IV']
// }
// const greetGuitarist = (guitarist: Guitarist) => {
//     if(guitarist.name) {
//         return `Hello ${guitarist.name.toUpperCase()}!`
//     }
//     return `Hello!`
// }
// console.log(greetGuitarist(evh))
// //enums
// enum Grade {
//     U = 5,
//     D,
//     C,
//     B,
//     A
// }
// console.log(Grade.C)
/** lesson 4 */
// Type Aliases
// type stringOrNumber = string | number
// type stringOrNumberArray = (string | number)[]
// type Guitarist = {
//     name?: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
// type UserId = stringOrNumber
// // Literal types
// let myName: 'Giga'
// let userName: 'Giga' | 'John' | 'Amy'
// userName = 'Amy'
// // functions
// const add = (a: number, b: number): number => {
//     return a + b
// }
// const logMsg = (message: any): void => {
//     console.log(message)
// }
// logMsg('Hello!')
// logMsg(add(2,3))
// let subtract = function (c: number, d: number): number {
//     return c - d
// }
// type mathFunction = (a: number, b: number) => number
// // interface mathFunction { 
// //     (a: number, b: number) : number}
// let multiply: mathFunction = function(c, d) {
//     return c * d
// }
// logMsg(multiply(2,3))
// // optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//     if (typeof c !== 'undefined'){
//         return a + b + c
//     }
//     return a + b
// }
// // default param value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//     return a + b + c
// }
// logMsg(addAll(2,3,2))
// logMsg(addAll(2,3))
// logMsg(sumAll(2,3))
// logMsg(sumAll( undefined, 3))
// // Rest Parameters
//  const total = (a: number, ...nums: number[]): number => {
//     return a + nums.reduce((prev, curr) => prev + curr)
//  }
//  logMsg(total(10, 2, 3))
//  const createError = (errMsg: string): never => {
//     throw new Error(errMsg)
//  }
//  const infinite = () => {
//     let i :number = 1
//     while (true) {
//         i++
//         if( i > 100) break
//     }
//  }
//  // custom type guard
//  const isNumber = (value: any) : boolean => {
//     return typeof value === 'number' ? true : false
//  }
//  const numberOrString = (value: number | string) : string => {
//     if(isNumber(!value)) return 'string'
//     if(isNumber(value)) return 'number'
//     return createError('This should never happen!')
//  }
/** lesson 5 */
// type One = string
// type Two = string | number
// type Three = 'hello'
// // convert to more or less specific
// let a : One = 'hello'
// let b = a as Two // less specific
// let c = a as Three // more specific
// let d = <One>'word'
// let e = <string | number>'word'
// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
//     if(c === 'add') return a + b
//     return '' + a + b
// }
// let myVal : string = addOrConcat(2,2,'concat') as string
// // Be careful! TS sees no problem - but a string is returned
// let nextVal : number = addOrConcat(2,2,'concat') as number
// // 10 as string
// (10 as unknown) as string
// // The DOM
// const img = document.querySelector('img')! 
// const myImg = document.getElementById('#img') as HTMLImageElement
// const nextImg = <HTMLImageElement>document.getElementById('#img') 
// img.src
// myImg.src
/** lesson 6 */
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
///
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
///
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Giga Kak'];
console.log(MyBands.data);
