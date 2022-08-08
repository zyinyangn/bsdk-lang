import bsdkLangModule from "./module/bsdkLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default bsdkLangModule.getParser();
