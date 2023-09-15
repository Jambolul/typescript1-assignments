export {};
// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
type value = string | number | null;

const lengthOrSquare = (value: value): string | number | null => {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === "string") {
        console.log("input is a string");
        return value.length;
    } else if (typeof value === "number") {
        console.log("input is a number");
        return value * value;
    } else {
        return "input is invalid";
    
    }

    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
};

// Prompt the user to enter a value as either a string or a number
const userInput = prompt("Enter a value, either a string or a number: ");
const parsedValue = isNaN(Number(userInput))
? userInput
: parseFloat(String(userInput));


  
// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
