// DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//My Solution
function basicOp(operation, value1, value2)
{
  if(operation == '+')
    {
      let sum = value1 + value2
      return sum
    }
  else if(operation == '-')
    {
      let diff = value1 - value2
      return diff
    }
  else if(operation == '*')
    {
      let prod = value1 * value2
      return prod
    }
  else if(operation == '/')
    {
      let quo = value1 / value2
      return quo
    }
}