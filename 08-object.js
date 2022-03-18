// 创建对象
// 工厂模式
function createPerson(name, age) {
  let o = Object()
  o.name = name
  o.age = age
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}
let person1 = createPerson('laoxu', 20)
// 构造函数模式
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}
let person2 = new Person('laoxu', 20)
// 原型模式
function Person3() { }
Person3.prototype.name = 'laoxu'
Person3.prototype.age = 20
Person3.prototype.sayName = function () {
  console.log(this.name)
}
let person3 = new Person3()

// 原型
// 构造函数下有一个 prototype 属性, 属性下也有一个 constructor 属性, 引用这个构造函数, 两者循环引用
console.log(typeof Person3.prototype)
console.log(Person3.prototype)
console.log(Person3.prototype.constructor === Person3)// true
// 通过 __proto__ 属性可以访问对象的原型
// 正常原型链都会终止与 Object 的原型对象, Object 的原型是 null
console.log(Person3.prototype.__proto__.constructor === Object); // true
console.log(Person.prototype.__proto__.__proto__ === null);
// 构造函数, 原型, 实例的关系
// 每个构造函数都有一个原型对象, 原型的一个属性指回构造函数, 实例有一个内部指针指向原型

// 继承
// 原型链继承
function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subProperty = false
}
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subProperty
}
let ins = new SubType()
console.log('ins', ins.getSuperValue())
// 盗用构造函数
function SubType2() {
  SuperType.call(this)
}
let ins2 = new SubType2()
console.log('ins2', ins2.property)
// 组合继承



// 类 class
// 构造函数, 实例化会调用其构造函数
class Person4 {
  constructor(name) {
    this.name = name || null
  }
}
let p4 = new Person4('laoxu')
console.log(p4.name)
// 继承, 背后的机制是原型链, extends 是语法糖
class Student extends Person4 {
  constructor(name) {
    super(name)
  }
}
let st = new Student('laoxxxx')



console.log(1)