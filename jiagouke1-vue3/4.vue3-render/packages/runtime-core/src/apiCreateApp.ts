export function createAppAPI(render) {
  return function createApp(rootComponent, rootProps) {
    // 告诉他那个组件那个属性来创建的应用
    const app = {
      mount(container) {
        // 挂载的目的地
        // let vnode = {}
        // render(vnode,container);
        // 1.根据组件创建虚拟节点
        // 2.将虚拟节点和容器获取到后调用render方法进行渲染

        // 创造虚拟节点
        
        // 调用render
      },
    };
    return app;
  };
}
