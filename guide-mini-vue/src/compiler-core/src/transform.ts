import { TO_DISPLAY_STRING } from "../runtimeHelpers";
import { NodeTypes } from "./ast";

export function transform(root, options = {}) {
  const context = createTransformContext(root, options);

  traverseNode(root, context);

  createRootCodegen(root);

  root.helpers.push(...context.helpers.keys());
}

function createRootCodegen(root) {
  root.codegenNode = root.children[0];
}

function traverseNode(node, context) {
  const nodeTransforms = context.nodeTransforms;

  for (let i = 0; i < nodeTransforms.length; i++) {
    const transform = nodeTransforms[i];
    transform(node);
  }

  switch (node.type) {
    case NodeTypes.INTERPOLATION:
      context.helper(TO_DISPLAY_STRING);
      break;

    case NodeTypes.ROOT:
    case NodeTypes.ELEMENT:
      traverseChildren(node, context);
      break;

    default:
      break;
  }
}

function traverseChildren(parent: any, context: any) {
  parent.children.forEach((node) => {
    traverseNode(node, context);
  });
}

function createTransformContext(root, options) {
  const context = {
    root,
    nodeTransforms: options.nodeTransforms || [],
    helpers: new Map(),
    helper(name) {
      context.helpers.set(name, 1);
    },
  };

  return context;
}
