import { NodeTypes } from "../ast";

export function transformExpression(node) {
  const { type } = node;
  if (type === NodeTypes.INTERPOLATION) {
    node.content = processExpression(node.content);
  }
}

function processExpression(node) {
  node.content = `_ctx.${node.content}`;

  return node;
}
