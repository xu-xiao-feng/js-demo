// 可迭代对象 iterable
// 很多类型实现 Iterator 接口: string, array, map, set, agruments 等
// 以下是接收可迭代的原生语言特性
let arr = ['foo', 'bar', 'baz']
// for...of
for (let ele of arr) {
  console.log(ele)
}
// 解构赋值
let [a, b, c] = arr
// 扩展字符串
let arr2 = [...arr]
// set
let set = new Set(arr)

// 使用 next() 方法在可迭代对象中遍历数据, 成功调用 next() 返回一个 IteratorResult 对象, 包含 done 和 value 两个属性.
let iter = arr[Symbol.iterator]()
console.log(iter) //Array Iterator
console.log(iter.next())//{value: 'foo', done: false}
console.log(iter.next())//{value: 'bar', done: false}
console.log(iter.next())//{value: 'baz', done: false}
console.log(iter.next())//{value: undefined, done: true}
console.log(iter.next())//{value: undefined, done: true}

// 自定义迭代器
class Counter {
  constructor(limit) {
    this.limit = limit
  }
  [Symbol.iterator]() {
    let count = 1
    let limit = this.limit
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
// 用闭包实现, 可以把每次的计数器变量放到闭包里
let counter = new Counter(3)
for (let i of counter) { console.log(i) }
for (let i of counter) { console.log(i) }

// 函数前面带有一个 * 表示为生成器
// yield 关键字可以让生成器停止和开始执行, 
// 遇到 yield 之前正常执行, 遇到 yield 会停止执行, 并将生成的值在 next() 方法中输出
// 通过调用 next() 方法, 恢复到停止的地方继续执行
// 使用 return 关键字退出生成器, 处于 done:true 状态
function* generator() {
  yield 'foo'
  yield 'bar'
  return 'baz'
}

let gen = generator()
console.log(gen.next())//{value: 'foo', done: false}
console.log(gen.next())//{value: 'bar', done: false}
console.log(gen.next())//{value: 'baz', done: false}
console.log(gen.next())//{value: undefined, done: true}
console.log(gen.next())//{value: undefined, done: true}

for (let ele of generator()) {
  console.log(ele)
}
// 使用生成器填充数组
function* zero(n) {
  while (n--) {
    yield 0;
  }
}
console.log(Array.from(zero(5)))

// yield 实现递归
function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1)
    yield n - 1
  }
}
for (let ele of nTimes(5)) {
  console.log(ele)
}