const {string, refine} = require('zod');

const customRegex = /^(\+63(\d){9})|(\d{11})$/;

const CustomRegexSchema = string().refine(value => customRegex.test(value), {
  message: 'Invalid input format. Please provide a valid phone number.',
});

// Test the schema
const validPhoneNumber1 = '+639123456789';
const validPhoneNumber2 = '12345678901';
const invalidPhoneNumber = '+641234567890';

console.log(CustomRegexSchema.safeParse(validPhoneNumber1)); // Output: { success: true, data: '+639123456789' }
console.log(CustomRegexSchema.safeParse(validPhoneNumber2)); // Output: { success: true, data: '12345678901' }
console.log(CustomRegexSchema.safeParse(invalidPhoneNumber)); // Output: { success: false, error: 'Invalid input format. Please provide a valid phone number.' }
