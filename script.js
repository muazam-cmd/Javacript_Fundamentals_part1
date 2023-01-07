// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const markMass = 78;
const MarkHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const MarkBMI = markMass / (MarkHeight * MarkHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBmi = MarkBMI > johnBMI;

// printing results
// console.log(`marks bmi: ${MarkBMI}`);
// console.log(`john bmi: ${johnBMI}`);
// console.log(`Mark has a higher Bmi than john: ${markHigherBmi}`);


// String and template literals:

// const firstName = 'Muazam'
// const birthYear = 1999;
// const year = 2023;
// const Job = 'Software Engineer';

// const mzm = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + Job + '!';
// console.log(mzm);
// const NewMzm = `I am ${firstName}, a ${year - birthYear} years old ${Job} !`;
// console.log(NewMzm);

// Challenge 2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

if (MarkBMI > johnBMI) {
    console.log(`Mark BMI ${MarkBMI} is higher than John's BMI ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${MarkBMI}!`)
}


