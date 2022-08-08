export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only hi bsdk, should throw an exception",
    input: `
        hi bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "only bye bsdk, should throw an exception",
    input: `
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "multiple hi bsdk, should throw an exception",
    input: `
        hi bsdk
        hi bsdk
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        hi bsdk
        hi bsdk
        bye bsdk
        bye bsdk
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        hi bsdk
        {
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        hi bsdk
        }
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        hi bsdk
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        hi bsdk
        {
          naam = 4
        }
        bye bsdk
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        hi bsdk
        bol bsdk ;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        hi bsdk
        bol bsdk 478
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        hi bsdk
        bol bsdk sahi galat;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        hi bsdk
        bol bsdk ~!*;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        hi bsdk
        bol bsdk a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a b c;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a 
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai ;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    hi bsdk
    jab tak bsdk (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        hi bsdk
        a = 4
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        hi bsdk
        a *=- 4;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        hi bsdk
        "hello" = 4;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        hi bsdk
        5 = 890;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        hi bsdk
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        hi bsdk
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        hi bsdk
        (a + 4;
        bye bsdk
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        hi bsdk
        a + 4);
        bye bsdk
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        hi bsdk
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        hi bsdk
        (a * (4 + 8 + 10);
        bye bsdk
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    hi bsdk
    bsdk ye hai a = b && ;
    bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    hi bsdk
    bsdk ye hai a = && b;
    bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    hi bsdk
    agar bsdk (&&);
    bye bsdk;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    hi bsdk
    bsdk ye hai a = 1..2;
    bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    hi bsdk
    bsdk ye hai a = ..2;
    bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    hi bsdk
    bsdk ye hai a = 1.2.3;
    bye bsdk;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        hi bsdk
        agar bsdk (sahi)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        hi bsdk
        warna bsdk {

        }
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        hi bsdk
       agar bsdk {

       }
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        hi bsdk
        nahi to bsdk (sahi) {
        }
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        hi bsdk
        nahi to bsdk (sahi) {
        } nahi to bsdk (sahi) {
        }
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        hi bsdk
        agar bsdk (sahi) {

        } nahi to bsdk (sahi)
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        hi bsdk
        agar bsdk (sahi) {

        } nahi to bsdk (sahi) {

        } nahi to bsdk (sahi)
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        hi bsdk
        agar bsdk (sahi) {

        } nahi to bsdk
        bye bsdk;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        hi bsdk
        agar bsdk (sahi) {

        } nahi to bsdk (sahi) {

        } nahi to bsdk
        bye bsdk;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        hi bsdk
          agla dekh bsdk
        bye bsdk
      `,
    output: SyntaxError,
  },
]