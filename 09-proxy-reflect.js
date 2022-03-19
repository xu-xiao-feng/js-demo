// 使用代理的主要目的是可以定义捕获器, 定义为"基本操作的拦截器"
// 处理程序对象中所有可以捕获的方法都有对应的反射(Reflect)API 方法, 不用自己手写
// 手写 get 方法
const target1 = { foo: 'bar' }
const handler1 = {
  get(trapTarget, property, receiver) {
    return trapTarget[property]
  }
}

const proxy1 = new Proxy(target1, handler1)
console.log(proxy1.foo)
console.log(target1.foo)
// 等价使用 Reflect.get 方法
const target2 = { foo: 'bar' }
const handler2 = {
  get() {
    return Reflect.get(...arguments)
  }
  // 简写 get: Reflect.get
}
const proxy2 = new Proxy(target2, handler2)
console.log(proxy2.foo)
console.log(target2.foo)

// 反射 API 不限于捕获处理程序
// 反射 API 方法在 Object 类型上有对应的方法

// 多级代理
const target3 = { foo: 'bar' }
const firstProxy = new Proxy(target3, {
  get() {
    console.log('first prolxy')
    return Reflect.get(...arguments)
  }
})
const secondProxy = new Proxy(firstProxy, {
  get() {
    console.log('second proxy')
    return Reflect.get(...arguments)
  }
})
console.log(secondProxy.foo)

// 13 种不同的基本操作
// get() , Reflect.get(), 获取属性值的操作中被调用
const myTarget = {};
const proxyGet = new Proxy(myTarget, {
  get(target, property, receiver) {
    console.log('get()');
    return Reflect.get(...arguments)
  }
});
proxy.foo; // get()

// set()捕获器会在设置属性值的操作中被调用。对应的反射 API 方法为 Reflect.set()。 const myTarget = {};
const proxySet = new Proxy(myTarget, {
  set(target, property, value, receiver) {
    console.log('set()');
    return Reflect.set(...arguments)
  }
}); 12
proxy.foo = 'bar'; // set()

// has()捕获器会在 in 操作符中被调用。对应的反射 API 方法为 Reflect.has()。
const proxyHaS = new Proxy(myTarget, {
  has(target, property) {
    console.log('has()');
    return Reflect.has(...arguments)
  }
});
'foo' in proxy;// has()


// defineProperty()捕获器会在 Object.defineProperty()中被调用。对应的反射 API 方法为 Reflect.defineProperty()。
const proxydefineProperty = new Proxy(myTarget, {
  defineProperty(target, property, descriptor) {
    console.log('defineProperty()');
    return Reflect.defineProperty(...arguments)
  }
});
Object.defineProperty(proxy, 'foo', { value: 'bar' }); // defineProperty()

// getOwnPropertyDescriptor()捕获器会在 Object.getOwnPropertyDescriptor()中被调 用。对应的反射 API 方法为 Reflect.getOwnPropertyDescriptor()。
const proxygetOwnPropertyDescriptor = new Proxy(myTarget, {
  getOwnPropertyDescriptor(target, property) {
    console.log('getOwnPropertyDescriptor()'); 12
    return Reflect.getOwnPropertyDescriptor(...arguments)
  }
});
Object.getOwnPropertyDescriptor(proxy, 'foo'); // getOwnPropertyDescriptor()

// deleteProperty()捕获器会在 delete 操作符中被调用。对应的反射 API 方法为 Reflect.deleteProperty()。
const proxydeleteProperty = new Proxy(myTarget, {
  deleteProperty(target, property) {
    console.log('deleteProperty()');
    return Reflect.deleteProperty(...arguments)
  }
});
delete proxy.foo
// deleteProperty()

// ownKeys()捕获器会在 Object.keys()及类似方法中被调用。对应的反射 API 方法为 Reflect.ownKeys()。
const proxyownKeys = new Proxy(myTarget, {
  ownKeys(target) {
    console.log('ownKeys()'); 3
    return Reflect.ownKeys(...arguments)
  }
});
Object.keys(proxy); // ownKeys()

// getPrototypeOf()捕获器会在 Object.getPrototypeOf()中被调用。对应的反射 API 方法为 Reflect.getPrototypeOf()。
const proxygetPrototypeOf = new Proxy(myTarget, {
  getPrototypeOf(target) {
    console.log('getPrototypeOf()');
    return Reflect.getPrototypeOf(...arguments)
  }
});
Object.getPrototypeOf(proxy); // getPrototypeOf()

// setPrototypeOf()捕获器会在 Object.setPrototypeOf()中被调用。对应的反射 API 方法为 Reflect.setPrototypeOf()。
const proxysetPrototypeOf = new Proxy(myTarget, {
  setPrototypeOf(target, prototype) {
    console.log('setPrototypeOf()');
    return Reflect.setPrototypeOf(...arguments)
  }
});
Object.setPrototypeOf(proxy, Object); // setPrototypeOf()

// isExtensible()捕获器会在 Object.isExtensible()中被调用。对应的反射 API 方法为 Reflect.isExtensible()。
const proxyisExtensible = new Proxy(myTarget, {
  isExtensible(target) {
    console.log('isExtensible()');
    return Reflect.isExtensible(...arguments)
  }
});
Object.isExtensible(proxy); // isExtensible()

// preventExtensions()捕获器会在 Object.preventExtensions()中被调用。对应的反射 API 方法为 Reflect.preventExtensions()。
const proxypreventExtensions = new Proxy(myTarget, {
  preventExtensions(target) {
    console.log('preventExtensions()');
    return Reflect.preventExtensions(...arguments)
  }
});
Object.preventExtensions(proxy); // preventExtensions()

// apply()捕获器会在调用函数时中被调用。对应的反射 API 方法为 Reflect.apply()。
const proxyapply = new Proxy(myTarget, {
  apply(target, thisArg, ...argumentsList) {
    console.log('apply()');
    return Reflect.apply(...arguments)
  }
});
proxy();
// apply()

// construct()捕获器会在 new 操作符中被调用。对应的反射 API 方法为 Reflect.construct()。
const proxyconstruct = new Proxy(myTarget, {
  construct(target, argumentsList, newTarget) {
    console.log('construct()');
    return Reflect.construct(...arguments)
  }
});
new proxy;
// construct()

console.log(1)