import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import bsdkLangModule from "../../src/module/bsdkLangModule";

test("test bsdkLangModule should success", () => {
  expect(bsdkLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(bsdkLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(bsdkLangModule.getProgram()).toBeInstanceOf(Program);
  expect(bsdkLangModule.getParser()).toBeInstanceOf(Parser);
});
