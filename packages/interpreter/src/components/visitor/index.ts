import { ASTNode } from "bsdk-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
