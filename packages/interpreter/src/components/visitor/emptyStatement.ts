import Visitor from ".";
import { ASTNode } from "bsdk-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
