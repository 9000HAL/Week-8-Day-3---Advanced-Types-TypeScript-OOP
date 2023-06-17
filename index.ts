// testing the output inside the console with console.log

console.log('thieves')



// Type Aliases: Creating our own Type

type Employees = {
    id: number
    name: string
}

const employees: Employees = {
    id: 0,
    name: 'Dylan'
}

const employees2: Employees = {
    id: 1,
    name: 'Christian'

}



// Union Types: Can allow a variable to be one of many types (number | string)

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2
    }   else {
            return weight * 2.2
    }
}
console.log(kgToLbs(10)) //22
console.log(kgToLbs('10')) //22
console.log(kgToLbs('10kg')) //22




// TypeScript Arrow Function

const lbsToKg = (weight: number | string): number => {    
    return 0
}






// Literal Types (exact)

type Quantity = (25 | 50 | 75 | 100)

let quantity: Quantity = 100



// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects

let speed: number | null = null

// FALSEY VALUES : 0, false, undefined, ''(an empty string), null
let ride = {
    speed: speed ?? 30
}

console.log(ride)



//////////here/////////////



/*
const myInput = document.getElementById('#myInput') as HTMLInputElement
myInput.value
*/


// The "unknown" type: We have to narrow down to a specific type before performing any operations
// It is preferred to use "unknown" over "any" bc it forces us to do some type checking ----> ( "the 'narrowing' I was talking about")

const render = (document: unknown) => {
    if (typeof document === 'string'){
        console.log('string')
    } else if (typeof document === 'number'){
        document.toFixed()
    }
}



// Creating Classes--------------------------------

/*
/////JAVACSRIPT EXAMPLE:
class Cohort {
    constructor(name, number){
        this.name = name
        this.numnber = number
    }
}
*/

/////-------> TYPESCRIPT:
class Cohort {
    name: string;
    number: number;
    constructor(name: string, number: number ){
        this.name = name
        this.number = number
    }
    printInfo = (): string => {
        return `${this.name}-${this.number}`
    }
}

const thieves = new Cohort('thieves', 118)
console.log(thieves.printInfo())






// typeof vs instanceof -----------------------------------------------------------


// private properties and accessing them


// Building a class with parameter properties: Preferred way


// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/


// interface MUST be an object







/////////////////////////////////////////////////////////////////////////////////////////////


/*


// testing the output inside the console with console.log


console.log("Hello, world!");
//Explanation: The console.log statement is used to output a message or value to the console. In this example, it will print "Hello, world!" to the console.

// Type Aliases: Creating our own Type


type Age = number;
let myAge: Age = 25;
//Explanation: Type aliases allow us to create our own custom types. In this example, we define a type alias called Age, which represents a number. We then declare a variable myAge of type Age and assign it the value 25.

// Union Types: Can allow a variable to be one of many types (number | string)


let result: number | string;
result = 10;
console.log(result);
result = "Hello";
console.log(result);
//Explanation: Union types allow a variable to hold values of multiple types. In this example, the variable result can be either a number or a string. We assign a number value to result and then output it to the console. Later, we assign a string value to result and output it again.

// TypeScript Arrow Function


const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 3));
//Explanation: Arrow functions are a concise way to define functions in TypeScript. In this example, we define an arrow function called add that takes two parameters a and b, both of type number, and returns their sum. We then call the add function with arguments 2 and 3 and output the result to the console.

// Literal Types (exact)


type Direction = "left" | "right" | "up" | "down";
let myDirection: Direction = "left";
console.log(myDirection);
//Explanation: Literal types allow us to specify exactly which values a variable can have. In this example, we define a type Direction that can only be one of the four specified string values. We declare a variable myDirection of type Direction and assign it the value "left". We then output myDirection to the console.

// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects


const name: string | null = null;
const displayName = name ?? "Anonymous";
console.log(displayName);
//Explanation: The nullish coalescing operator (??) allows us to provide a default value when dealing with null or undefined values. In this example, we have a variable name which is either a string or null. We use the nullish coalescing operator to assign the value of name to displayName, but if name is null or undefined, the fallback value "Anonymous" will be used instead. We then output displayName to the console.

// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.


let someValue: unknown = "hello";
let strLength: number = (someValue as string).length;
console.log(strLength);
//Explanation: Type assertions allow us to specify a different type for a variable than the one inferred by the compiler. In this example, we have a variable someValue of type unknown, which means the type is not known at compile-time. We use a type assertion `(someValue as string


*/