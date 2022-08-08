import Visitor from ".";
import { ASTNode } from "bsdk-lang-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
