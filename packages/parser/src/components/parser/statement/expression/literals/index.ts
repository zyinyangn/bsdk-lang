import { TokenTypes } from "../../../../../constants/bsdkLangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import bsdkLangModule from "../../../../../module/bsdkLangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return bsdkLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return bsdkLangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return bsdkLangModule.getStringLiteral();

      case TokenTypes.NALLA_TYPE:
        return bsdkLangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
