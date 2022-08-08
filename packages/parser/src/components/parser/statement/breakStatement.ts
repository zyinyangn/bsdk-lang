import Statement from ".";

import { TokenTypes } from "../../../constants/bsdkLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class BreakStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BAS_KAR_bsdk);

        return {
            type: NodeType.BreakStatement
        }
    }
}