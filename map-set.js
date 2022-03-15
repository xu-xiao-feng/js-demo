/**
 * Map 保存键值对, 可以记住键的原始插入顺序
 * Map 和 Object 的区别
 * - map 的键是任意类型的, 包括函数, 对象; object 的键必须是 string 或 symbol
 * - map 的键是有序的, 按插入的顺序; object 的键是无序的
 * - map 的键个数可以通过 size 方法获取; object 只能手动计算
 * - map 是可迭代的; object 只能通过其他方式变成可迭代
 * - map 在频繁增删键有更好的表现; object 未作出优化
 */

// 初始化
let map1 = new Map()
let map2 = new Map([[1, '1'], ['a', 3]]) // 可迭代对象

let obj = {}
let func = function name(params) { }

// 设置
map1.set(1, 'a')
map1.set('a', 'b')
map1.set(obj, 'c')
map1.set(func, 'd')

// 取值
console.log(
  map1.get(1),
  map1.get('a'),
  map1.get(obj),
  map1.get(func)
)

// for...of
for (const [key, value] of map1) {
  console.log('for...of', key, value)
}

// forEach
map1.forEach((key, value) => {
  console.log('forEach', key, value)
})

// keys
console.log(map1.keys())

// values
console.log(map1.values())

// size
console.log(map1.size)

// has
map1.has(1) //true

// delete
map1.delete(1)

// clear
map1.clear()

// 和 Array 的关系
console.log(Array.from(map1))

/**
 * Set 存储任意类型唯一值, 值的集合, 可以按顺序迭代
 */
// 初始化
let set = new Set([1, 2, 2, 3, 3, 3, 4, 5])

// size
console.log(set.size)

// add
set.add(6)

// entries
for (const ele of set.entries()) {
  console.log(ele)
}

// forEach
set.forEach(ele => {
  console.log(ele)
})

// keys
console.log(set.keys())

// values
console.log(set.values())

// has
set.has(1)

// array 转化
console.log([...set])

// delete
set.delete(1)

// clear
set.clear()

/**
 * WeakMap
 * 键是弱引用, 键必须是对象, 值可以是任意
 */

/**
 * WeakSet
 * 对象允许你将弱保持对象存储在一个集合中
 * 对集合中的对象，如果不存在其他引用，那么该对象将可被垃圾回收。于是不存在一个当前可用对象组成的列表，所以WeakSets不可枚举
 */

console.log(0)