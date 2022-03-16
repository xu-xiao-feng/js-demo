// 两种不同类型的数据
// 原始值: 简单的数据, 原始类型, 是按值访问的, 操作的是存储在变量的实际值
// 引用值: 由多个值构成的对象, 操作对象时, 操作的是对该对象的引用, 而非对象本身

// 原始值是没有属性的, 只能通过字面量形式
// 引用值是有属性的, 使用 new 会创建一个 Object 类型的示例
let num = 12
num.name = 'str'
console.log(num.name) // undefined

let obj = new Number(12)
obj.name = 'str'
console.log(obj)

// 原始值复制是值的复制
// 引用值的复制是引用的复制
let num1 = 1
let num2 = num1
num1 = 2
console.log(num2) // num2 不会改变

let obj1 = {
  a: 1
}
let obj2 = obj1
obj1.a = 2
console.log(obj2) // obj2 中的 a 也改变了, obj1,obj2 都指向了同一个内存块

// 函数传参都是值传递的, 不是引用传递的
function setName(obj) {
  obj.name = 'laoxu'
  obj = new Object()
  obj.name = 'xiaoxu'
}
let person = new Object()
setName(person)
console.log(person.name)

// typeof 适用于判断一个变量是否为原始类型
// instanceof 使用与判断一个变量是什么类型的变量
console.log(
  typeof 1,
  typeof 'str',
  typeof null,
  typeof {}
)
console.log(
  [] instanceof Array,
  {} instanceof Object,
  1 instanceof Number
)



console.log(1)