import Visitor from ".";
import { ASTNode } from "bsdk-lang-parser";

export default class NumericLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
