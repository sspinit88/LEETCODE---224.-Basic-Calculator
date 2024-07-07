/*
224. Basic Calculator

Given a string s representing a valid expression, 
implement a basic calculator to evaluate it, 
and return the result of the evaluation.

Note: You are not allowed to use any built-in function 
which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2

Example 2:

Input: s = " 2-1 + 2 "
Output: 3

Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23


Ваша задача - реализовать базовый калькулятор для вычисления выражения, представленного в виде строки s, и вернуть результат вычисления.

Вот шаги, которые мы будем следовать:

1. Инициализируйте стек для отслеживания чисел и знаков операций.
2. Пройдите по каждому символу в строке s. Если символ является числом, обновите текущее число. 
   Если символ является знаком операции, добавьте текущее число и знак операции в стек, затем сбросьте текущее число. 
   Если символ является открывающей скобкой, добавьте знак операции в стек. 
   Если символ является закрывающей скобкой, вычислите выражение внутри скобок и добавьте результат в стек.
3. После прохождения всех символов в s, вычислите выражение в стеке и верните результат.

Your task is to implement a basic calculator to evaluate the expression represented as a string s, and return the result of the evaluation.

Here are the steps we will follow:

1. Initialize a stack to track the numbers and operation signs.
2. Go through each character in the string s. If the character is a number, update the current number. 
   If the character is an operation sign, add the current number and the operation sign to the stack, then reset the current number. 
   If the character is an opening bracket, add the operation sign to the stack. 
   If the character is a closing bracket, calculate the expression inside the brackets and add the result to the stack.
3. After going through all characters in s, calculate the expression in the stack and return the result.

*/

function calculate(s) {
  // Инициализируем переменные для отслеживания текущего числа, текущего знака и результата
  // Initialize variables to track the current number, the current sign, and the result
  let number = 0;
  let sign = 1;
  let result = 0;

  // Инициализируем стек для отслеживания чисел и знаков операций
  // Initialize a stack to track the numbers and operation signs
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // Если символ является числом, обновляем текущее число
    // If the character is a number, update the current number
    if (char >= '0' && char <= '9') {
      number = number * 10 + (char - '0');
    }
    // Если символ является знаком операции
    // If the character is an operation sign
    else if (char === '+') {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (char === '-') {
      result += sign * number;
      number = 0;
      sign = -1;
    }
    // Если символ является открывающей скобкой, добавляем текущий результат и знак в стек
    // If the character is an opening bracket, add the current result and sign to the stack
    else if (char === '(') {
      stack.push(result);
      stack.push(sign);
      sign = 1;
      result = 0;
    }
    // Если символ является закрывающей скобкой, вычисляем выражение внутри скобок и добавляем результат в стек
    // If the character is a closing bracket, calculate the expression inside the brackets and add the result to the stack
    else if (char === ')') {
      result += sign * number;
      number = 0;
      result *= stack.pop();
      result += stack.pop();
    }
  }
  // Если в конце строки есть число, добавляем его к результату
  // If there is a number at the end of the string, add it to the result
  if (number != 0) result += sign * number;
  return result;
}
