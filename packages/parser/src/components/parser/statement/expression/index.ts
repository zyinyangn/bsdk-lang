import { NodeType } from "../../../../constants/constants";
import bsdkLangModule from "../../../../module/bsdkLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return bsdkLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return bsdkLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return bsdkLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return bsdkLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return bsdkLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return bsdkLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return bsdkLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return bsdkLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return bsdkLangModule.getRelationalExpression();

      default:
        return bsdkLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
