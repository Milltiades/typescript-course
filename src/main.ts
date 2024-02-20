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

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

// Literal types
let myName: 'Giga'

let userName: 'Giga' | 'John' | 'Amy'
userName = 'Amy'

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}
logMsg('Hello!')
logMsg(add(2,3))

let subtract = function (c: number, d: number): number {
    return c - d
}


type mathFunction = (a: number, b: number) => number

// interface mathFunction { 
//     (a: number, b: number) : number}

let multiply: mathFunction = function(c, d) {
    return c * d
}

logMsg(multiply(2,3))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

// default param value

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll( undefined, 3))

// Rest Parameters
 const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
 }
 logMsg(total(10, 2, 3))

 const createError = (errMsg: string): never => {
    throw new Error(errMsg)
 }

 const infinite = () => {
    let i :number = 1
    while (true) {
        i++
        if( i > 100) break
    }
 }
 // custom type guard
 const isNumber = (value: any) : boolean => {
    return typeof value === 'number' ? true : false
 }

 const numberOrString = (value: number | string) : string => {
    if(isNumber(!value)) return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen!')
 }
