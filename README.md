# Unexpected String Concatenation in JavaScript
This example demonstrates a common error in JavaScript due to its dynamic typing.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition. This can lead to unexpected results if not handled carefully.

## Bug
The `foo` function attempts to add two values. However, because one is a number and the other a string, the '+' operator performs string concatenation, resulting in '12' instead of 3.

## Solution
The solution involves type checking or explicit type conversion using `parseInt()` or `Number()` to ensure both values are numbers before addition.