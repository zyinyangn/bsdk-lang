import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a = 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hi bsdk;
          a += 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hi bsdk;
          a -= 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hi bsdk;
          a -= 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hi bsdk;
          a /= 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hi bsdk;
          a;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a + b;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a + 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a - 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a - b;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a * 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a * b;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a / 4;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hi bsdk;
          a / b;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hi bsdk;
          bol bsdk a;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hi bsdk;
          bol bsdk a, b;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hi bsdk;
          bsdk ye hai a = 8;
          bol bsdk a, b;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hi bsdk;
          bsdk ye hai a = b = 8;
          bye bsdk;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        hi bsdk;
        bsdk ye hai a;
        a = 9;
        bsdk ye hai a = 0;
        bye bsdk;
      `,
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a;
      bol bsdk a + 9;
      bye bsdk;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = nalla;
      bol bsdk a + 9;
      bye bsdk;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = nalla + 80;
      bye bsdk;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = nalla + "jam";
      bye bsdk;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a;
      bsdk ye hai b = a + "hello";
      bye bsdk;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a;
      bsdk ye hai b = ((a*9) * a + "hello");
      bye bsdk;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = sahi;
      bol bsdk a + 9;
      bye bsdk;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = galat;
      bol bsdk a + 9;
      bye bsdk;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = sahi + 80;
      bye bsdk;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = galat + 80;
      bye bsdk;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = sahi;
      bsdk ye hai b = a + "hello";
      bye bsdk;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      hi bsdk;
      bsdk ye hai a = galat;
      bsdk ye hai b = ((a*9) * a + "hello");
      bye bsdk;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        hi bsdk
        (nalla * (4 + 8 + 10));
        bye bsdk
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        hi bsdk
        (nalla * (sahi + 8 + 10));
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        hi bsdk
        (sahi * (nalla + 8 + 10));
        bye bsdk
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        hi bsdk
        (nalla + sahi);
        bye bsdk
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hi bsdk
        (sahi * (4 + 8 + 10));
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hi bsdk
        sahi + galat;
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = sahi, b = galat;
        a + b;
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hi bsdk
        sahi * galat;
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = sahi, b = galat;
        a * b;
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hi bsdk
        sahi / galat;
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = sahi, b = galat;
        a / b;
        bye bsdk
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        hi bsdk
        bol bsdk nalla + 5;
        bye bsdk;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a;
        a *= 5;
        bye bsdk;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = sahi;
        a *= 5;
        bye bsdk;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = nalla;
        a /= 5;
        bye bsdk;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hi bsdk
        jab tak bsdk (sahi) {

        }
        bye bsdk;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = 0;
        jab tak bsdk (a < 2) {
          bol bsdk "bsdk";
        }
        bye bsdk;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = 0;
        agar bsdk (sahi)
          bas kar bsdk;
        bye bsdk;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        hi bsdk
        bol bsdk nalla && 90;
        bye bsdk;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a;
        bol bsdk a && 90;
        bye bsdk;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hi bsdk;
      bol bsdk "sahi" % 9;
      bye bsdk;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = 0;
        jab tak bsdk (a < 2) {
          agla dekh bsdk;
          a = 5;
        }
        bye bsdk;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hi bsdk
        bsdk ye hai a = 0;
        agar bsdk (sahi)
          agla dekh bsdk
        bye bsdk;
      `,
    output: RuntimeException,
  },
];
