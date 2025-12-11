Answer the following questions (in the same document where you wrote previous answers):
1. What is the difference between a JavaScript object in a .ts/.js file and JSON in a .json file?

--JavaScript Object (.js / .ts)--

It’s code

Can contain functions

Can use variables or expressions

Keys don’t need quotes

Allows comments

--JSON (.json)--

It’s pure data

Cannot contain functions

No variables or expressions allowed

Keys must always have quotes

No comments allowed

2. Why is it better to use a specific type like Student instead of any when working with parsed
JSON data? 

Using a specific type like Student makes your code safer.
It helps catch errors early because TypeScript can check that the data has the correct structure, unlike any, which disables type checking.

3. What are the two main functions used to convert between JSON text and JavaScript/TypeScript
objects?

The two main functions are:

JSON.stringify() → converts an object to JSON text

JSON.parse() → converts JSON text back into an object