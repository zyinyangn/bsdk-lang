import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi bsdk;
    bsdk ye hai a = 4;
    {
      bsdk ye hai a = 90;
      bol bsdk a;
    }
    bol bsdk a;
    bye bsdk;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi bsdk;
    bsdk ye hai a = 4;
    {
      a = 90;
      bol bsdk a;
    }
    bol bsdk a;
    bye bsdk;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi bsdk;
    bsdk ye hai a = 4;
    {
      bol bsdk a;
    }
    bol bsdk a;
    bye bsdk;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk;
    bsdk ye hai a = 0;
    jab tak bsdk (a < 2) {
      bol bsdk "bsdk";
      a += 1;
    }
    bye bsdk;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bsdk");
  expect(console.log).toHaveBeenCalledWith("bsdk");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk;
    bsdk ye hai a = 0, b = 0;
    jab tak bsdk (a < 2) {
      jab tak bsdk (b < 1) {
        bol bsdk "bsdk";
        b += 1;
      }
      a += 1;
    }
    bye bsdk;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bsdk");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk;
    bsdk ye hai a = 0;
    jab tak bsdk (a < 2) {
      bsdk ye hai b = 0;
      jab tak bsdk (b < 2) {
        bol bsdk "bsdk";
        b += 1;
        agar bsdk (b == 1)
          bas kar bsdk;
      }
      a += 1;
    }
    bye bsdk;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bsdk");
  expect(console.log).toHaveBeenCalledWith("bsdk");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk
    bsdk ye hai a = 0;
    jab tak bsdk (a < 10) {
      bol bsdk a;
      a += 1;
      agar bsdk (a == 6) {
        bas kar bsdk;
      }
    }
    bol bsdk "done";
    bye bsdk
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk
    bsdk ye hai a = 0;
    jab tak bsdk (a < 10) {
      bol bsdk a;
      a += 1;
      agar bsdk (a == 6)
        bas kar bsdk;
    }
    bol bsdk "done";
    bye bsdk
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk
    bsdk ye hai a = 0;
    jab tak bsdk (a < 10) {
      bol bsdk a;
      a += 1;
      agar bsdk (a == 3) {
        bas kar bsdk;
      }
      bol bsdk "2 baar hi chapunga";
    }
    bol bsdk "done";
    bye bsdk
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk
    
    jab tak bsdk (sahi) {
      bol bsdk "bsdk";
    }
    bye bsdk;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bsdk");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi bsdk
    bsdk ye hai x = 6;
    agar bsdk (x < 5) {
      bol bsdk "x < 5";
    } nahi to bsdk (x < 8) {
      bol bsdk "x < 8";
    } agar bsdk (x < 4) {
      bol bsdk "x < 4";
    } warna bsdk {
      bol bsdk "x > 4";
    }
    bye bsdk;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi bsdk
//     bsdk ye hai a = 0;
//     jab tak bsdk (a < 10) {
//       bol bsdk a;
//       a += 1;
//       agar bsdk (a == 3) {
//         bas kar bsdk;
//       }
//       bol bsdk "2 baar hi chapunga";
//     }
//     bol bsdk "done";
//     bye bsdk
//     `);
// });
