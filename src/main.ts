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

// class Coder {

//     secondLang!: string

//     constructor(
//         public readonly name: string,
//         public music: string,
//         private age:number,
//         protected lang: string = 'Typescript'
//         ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
//     public getAge() {
//         return `Hello, I'm ${this.age}`
//     }
// }

// const Dave = new Coder('Dave', 'Rock', 42)
// console.log(Dave.getAge())
// // console.log(Dave.age)
// // console.log(Dave.lang)

// class WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number
//         ) {
//             super(name, music, age)
//             this.computer = computer
//     }
//     public getLang() {
//         return `I write ${this.lang}`
//     }
// }

// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
// console.log(Sara.getLang())
// // console.log(Sara.age)
// // console.log(Sara.lang)

// ///

// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string):string
// }

// class Guitarist implements Musician {
//     name: string
//     instrument: string

//     constructor(name: string, instrument: string) {
//         this.name = name
//         this.instrument = instrument
//     }
//     play(action:string) {
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// const Page = new Guitarist('Jimmy', 'guitar')

// console.log(Page.play('strums'))
// ///

// class Peeps {
//     static count: number = 0

//     static getCount(): number {
//         return Peeps.count
//     }

//     public id: number
//     constructor(public name: string) {
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }

// const John = new Peeps('John')
// const Steve = new Peeps('Steve')
// const Amy = new Peeps('Amy')

// console.log(Amy.id)
// console.log(Steve.id)
// console.log(John.id)
// console.log(Peeps.count)
// ///

// class Bands {
//     private dataState: string[]

//     constructor() {
//         this.dataState = []
//     }
//     public get data() : string[] {
//          return this.dataState
//     }
//     public set data(value: string[]) {
//         if (Array.isArray(value) && value.every(el =>
//             typeof el === 'string')){
//                 this.dataState = value
//                 return
//             } else throw new Error('Param is not an array of strings')
//     }
// }

// const MyBands = new Bands()
// MyBands.data = ['Neil Young', 'Led Zep']
// console.log(MyBands.data)
// MyBands.data = [...MyBands.data, 'Giga Kak']
// console.log(MyBands.data)

/** lesson 7 */

// Index Signatures

// interface TransactionObj {
//    readonly [index: string]: number
// }

// interface TransactionObj {
//   readonly [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);

// let prop: string = "Pizza";

// console.log(todaysTransactions[prop]);

// const todayNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }
//   return total;
// };

// console.log(todayNet(todaysTransactions));

// // todaysTransactions.Pizza = 40

// console.log(todaysTransactions["Giga"]);

// ///

// interface Student {
//   // [key: string]: string | number | number[] | undefined
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// const student: Student = {
//   name: "Giga",
//   GPA: 3.5,
//   classes: [100, 200],
// };

// // console.log(student.test)

// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }

// Object.keys(student).map((key) => {
//   console.log(student[key as keyof typeof student]);
// });

// const logStudentKey = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key} : ${student[key]}`);
// };

// logStudentKey(student, "GPA");
// logStudentKey(student, "name");
// logStudentKey(student, "classes");

// ///

// // interface Incomes {
// //     [key: string]: number
// // }

// type Streams = "salary" | "bonus" | "sidehustle";

// type Incomes = Record<Streams, number | string>;

// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   sidehustle: 250,
// };

// for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue as keyof Incomes])
// }

/** lesson 8 */

// const echo = <T>(arg: T): T => arg;

// const isObj = <T>(arg: T): boolean => {
//   return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
// };

// // console.log(isObj(true));
// // console.log(isObj("John"));
// // console.log(isObj([1, 2, 3]));
// // console.log(isObj({ name: "John" }));
// // console.log(isObj(null));

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { arg, is: false };
//   }
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return { arg, is: false };
//   }
//   return { arg, is: !!arg };
// };

// // console.log(isTrue(false))
// // console.log(isTrue(0))
// // console.log(isTrue(true))
// // console.log(isTrue(1))
// // console.log(isTrue('Dave'))
// // console.log(isTrue(''))
// // console.log(isTrue(null))
// // console.log(isTrue(undefined))
// // console.log(isTrue({}))
// // console.log(isTrue({name: 'Dave'}))
// // console.log(isTrue([]))
// // console.log(isTrue([1,2,3]))
// // console.log(isTrue(NaN))
// // console.log(isTrue(-0))

// interface BoolCheck<T> {
//   value: T,
//   is: boolean
// }

// const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
//   if (Array.isArray(arg) && !arg.length) {
//     return {value: arg, is: false };
//   }
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return {value: arg, is: false };
//   }
//   return {value: arg, is: !!arg };
// };

// interface HasID {
//   id: number
// }
// const processUser = <T extends HasID>(user: T): T => {
//   // process the user with logic here
//   return user
// }

// // console.log(processUser({id: 1, name: 'Dave'}))
// // console.log(processUser({ name: 'Dave'}))

// const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
//   return users.map(user => user[key])
// }

// const usersArray = [
//   {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//           "street": "Kulas Light",
//           "suite": "Apt. 556",
//           "city": "Gwenborough",
//           "zipcode": "92998-3874",
//           "geo": {
//               "lat": "-37.3159",
//               "lng": "81.1496"
//           }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//           "name": "Romaguera-Crona",
//           "catchPhrase": "Multi-layered client-server neural-net",
//           "bs": "harness real-time e-markets"
//       }
//   },
//   {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//           "street": "Victor Plains",
//           "suite": "Suite 879",
//           "city": "Wisokyburgh",
//           "zipcode": "90566-7771",
//           "geo": {
//               "lat": "-43.9509",
//               "lng": "-34.4618"
//           }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//           "name": "Deckow-Crist",
//           "catchPhrase": "Proactive didactic contingency",
//           "bs": "synergize scalable supply-chains"
//       }
//   },
// ]

// // console.log(getUsersProperty(usersArray, "email"))
// // console.log(getUsersProperty(usersArray, "username"))

// class StateObject<T> {
//   private data: T
//   constructor(value:T) {
//     this.data = value
//   }

//   get state(): T {
//     return this.data
//   }

//   set state(value: T) {
//     this.data = value
//   }
// }

// const store = new StateObject('John')

// console.log(store.state)
// store.state = 'Dave'
// // store.state = 12

// const myState = new StateObject<(string | number | boolean)[]>([15])

// myState.state = (['Dave', 42, true])

// console.log(myState.state)

/** lesson 9 */

// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // sent to database, etc
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 88

recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 95 },
  Kelly: { assign1: 76, assign2: 15 },
};


// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project"
  
}

// 

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = { title: string, points: number }

const createNewAssign = ( title:string, points: number) => {
  return { title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('Utility Types', 100)

console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with ReturnType of a Promise

interface User {
  id: number,
  name: string,
  username: string,
  email:string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
      return res.json()
    }).catch(err => {
      if(err instanceof Error) console.log(err.message)
    })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))