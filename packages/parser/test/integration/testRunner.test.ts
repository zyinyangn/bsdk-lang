import NallaPointerException from "../../src/exceptions/nallaPointerException";
import bsdkLangModule from "../../src/module/bsdkLangModule";

import {
  IfStatementNagativeTests,
  NegativeExpressionsTests,
  NegativeStatementTests
} from "./negativeTestsHelper";
import {
  ExpressionsTests,
  IfStatementTests,
  StatementTests,
  WhileStatementTests
} from "./positiveTestsHelper";


type posTestObjType = typeof StatementTests[0];

type negTestObjType = {
  name: string;
  input: string;
  output: SyntaxErrorConstructor | typeof NallaPointerException;
};

StatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

ExpressionsTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

IfStatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

WhileStatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

IfStatementNagativeTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

NegativeStatementTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

NegativeExpressionsTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

function _runPositiveTests(testCase: posTestObjType) {
  test(testCase.name, () => {
    const parser = bsdkLangModule.getParser();
    const ast = parser.parse(testCase.input);
    expect(JSON.stringify(ast)).toBe(testCase.output);
  });
}

function _runNegativeTests(testCase: negTestObjType) {
  test(testCase.name, () => {
    const parser = bsdkLangModule.getParser();
    expect(() => parser.parse(testCase.input)).toThrow(testCase.output);
  });
}

// test("jest test", () => {
//   const parser = bsdkLangModule.getParser();
//   console.debug(JSON.stringify(parser.parse(`
//   hi bsdk
//       bol bsdk 9 == 90;
//       bye bsdk
//   `)));
// })
