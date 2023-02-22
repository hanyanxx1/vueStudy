import { helperNameMap, TO_DISPLAY_STRING } from "../runtimeHelpers";
import { NodeTypes } from "./ast";

export function generate(ast) {
  const context = createCodegenContext();
  const { push } = context;

  genFunctionPreamble(ast, context);

  const functionName = "render";
  const args = ["_ctx", "_cache"];
  const signature = args.join(", ");

  push(`function ${functionName}(${signature}){`);
  push(`return `);
  getNode(ast.codegenNode, context);
  push("}");

  return {
    code: context.code,
  };
}

function genFunctionPreamble(ast: any, context: any) {
  const { push } = context;
  const VueBinging = "Vue";
  const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
  push(`const { ${ast.helpers.map(aliasHelper).join(", ")} } = ${VueBinging}`);
  push("\n");
  push("return ");
}

function createCodegenContext() {
  const context = {
    code: "",
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(source) {
      context.code += source;
    },
  };
  return context;
}

function getNode(node, context) {
  switch (node.type) {
    case NodeTypes.INTERPOLATION:
      genInterpolation(node, context);
      break;
    case NodeTypes.SIMPLE_EXPRESSION:
      genExpression(node, context);
      break;
    case NodeTypes.TEXT:
      genText(context, node);
      break;

    default:
      break;
  }
}

function genExpression(node, context) {
  context.push(node.content, node);
}

function genText(context: any, node: any) {
  const { push } = context;
  push(`"${node.content}"`);
}

function genInterpolation(node, context) {
  const { push, helper } = context;
  push(`${helper(TO_DISPLAY_STRING)}(`);
  getNode(node.content, context);
  push(")");
}
