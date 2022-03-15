'user strict'
/**
 * 初始化一个对象
 */

// 构造函数
let obj1 = new Object()
obj1.name = 'laoxu'

// 字面量
let obj2 = {}
obj2.name = 'laochen'

/**
 * 静态方法
 */

// Object.assign()
// 从一个或多个对象, 将多个属性分配到目标对象, 返回一个新的对象
const target = {
  a: 'a',
  b: 1
}
const source = {
  b: 3,
  c: 'ccc'
}
const returnTarget = Object.assign(target, source)

// Object.entries()
// 返回一个自身对象可诶局属性的键值对数组
for (const [key, value] of Object.entries(target)) {
  console.log(key, value)
}

// Object.freeze()
// 冻结一个对象, 被冻结的对象不能修改, 新增, 删除
// Object.isFrozen()
// 判断一个对象是否冻结
const freeze = {
  a: 'a',
  b: {
    bb: 'bb'
  }
}
Object.freeze(freeze)
freeze.a = 'aaa'        // 无法修改, 任然是 'a'
freeze.b.bb = 'bbbbb'   // 可以修改, 属性下对象内容无法冻结
Object.isFrozen(freeze) // true

// Object.getOwnPropertyNames()
// 将自身的属性成数组返回
// Object.keys() , for...in 效果相同
const keys1 = Object.getOwnPropertyNames(target)
const keys2 = Object.keys(target)
for (const key in target) {
  console.log(key)
}


// Object.seal()
// 封闭一个对象, 不可新增, 删除属性, 可以修改属性
const seal = {
  a: 1,
  b: 2
}
Object.seal(seal)
delete seal.a           // 删除不成功
seal.c = 3              // 新增不成功
seal.a = 4              // 修改成功
Object.isSealed(seal)   // true

// Object.values()
// 将自身的值成数组返回
let value = Object.values(target)


/**
 * 示例属性
 */
// Object.prototype.hasOwnProperty()
// 返回布尔值, 表示是否含有指定属性
const isProperty = target.hasOwnProperty('a')

// Object.prototype.toString()
// 返回一个表示该对象的字符串
const objStr = target.b.toString()

console.log('done')