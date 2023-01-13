export function ref(value) {
  // 将普通类型 变成一个对象 , 可以是对象 但是一般情况下是对象直接用reactive更合理
  return createRef(value);
}

// ref 和 reactive的区别 reactive内部采用proxy  ref中内部使用的是defineProperty

export function shallowRef(value) {
  return createRef(value, true);
}

// 后续 看vue的源码 基本上都是高阶函数 做了类似柯里化的功能

class RefImpl {
  public _value; //表示 声明了一个_value属性 但是没有赋值
  public __v_isRef = true; // 产生的实例会被添加 __v_isRef 表示是一个ref属性
  // 参数中前面增加修饰符 标识此属性放到了实例上
  constructor(public rawValue, public shallow) {}
}

function createRef(rawValue, shallow = false) {
  return new RefImpl(rawValue, shallow);
}
