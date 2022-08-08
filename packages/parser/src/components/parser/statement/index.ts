import { TokenTypes } from "../../../constants/bsdkLangSpec";
import bsdkLangModule from "../../../module/bsdkLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.BOL_bsdk_TYPE:
        return bsdkLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return bsdkLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return bsdkLangModule.getBlockStatement();

      case TokenTypes.bsdk_YE_HAI_TYPE:
        return bsdkLangModule.getVariableStatement();

      case TokenTypes.AGAR_bsdk:
        return bsdkLangModule.getIfStatement();

      case TokenTypes.JAB_TAK_bsdk:
        return bsdkLangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_bsdk:
        return bsdkLangModule.getBreakStatement();
      
      case TokenTypes.AGLA_DEKH_bsdk:
        return bsdkLangModule.getContinueStatement();

      default:
        return bsdkLangModule.getExpressionStatement();
    }
  }
}
