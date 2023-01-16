import { createAppAPI } from "./apiCreateApp";

export function createRenderer(rendererOptions) {
  // 告诉core 怎么渲染
  const render = (vnode, container) => {};

  return {
    createApp: createAppAPI(render),
  };
}
// createRenderer 目的是创建一个渲染器

// 框架 都是将组件 转化成虚拟DOM -》 虚拟DOM生成真实DOM挂载到真实页面上
