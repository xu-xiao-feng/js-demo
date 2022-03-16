/**
 * 数据类型
 */
// typeof 返回以下字符串之一
// undefined,boolean,string,number,object,function,symbol
console.log(
  typeof 'str',
  typeof 12,
  typeof true,
  typeof {},
  typeof [],
  typeof undefined,
  typeof null,
  typeof function name(params) { }
)

// undefined
// 声明变量未定义, 会给变量默认赋予 undefined 值
// 不要显式的给某个变量设置 undefined 值, 主要用于比较
let und

// null
// 逻辑上讲, 表示一个空对象指针, typeof null 会返回 object
// undefined 是从 null 派生出来的, == 比较会是相等的
console.log(typeof null) // object
console.log(null == undefined) // true
console.log(null === undefined) // false

// boolean
// 两个值: true, false
// 转化为 true: 非空字符串, 非 0 数字, 任意对象
// 转化为 false: 空字符串, 0, NaN, null, undefined
let isFound = true

// number
// 表示十进制,八进制,十六进制, 可以使用科学计数法
// 表示整数,浮点数
// Infinity 表示无穷大
// NaN 表示 不是数值, isNaN 判断
let num1 = 12
let num2 = 3.25
let num3 = 0x12
let num4 = 0o12
let num5 = 1.1e3
let num6 = 1 / 0
let num7 = 'str' / 1
console.log(isNaN(num7))
// 数值转换
let num8 = Number('')
let num9 = Number('2')
let num10 = Number(true)
let num11 = parseInt('1.1')
let num12 = parseFloat('0093.5')

// string
// 表示零或多个16 位 Unicode 字符序列, 可以使用"", '', ``
// 转义字符 \n 换行, \t 制表, \b 退格, \r 回车, \f 换页
let str1 = 'john'
let str2 = 'smish' + str1
let str3 = num1.toString()
let str4 = num1.toString(8)//进制转换
let str5 = `${str1} age ${num1.toString()}`// 模板字符串

// symbol
// 唯一不可变, 用来确保对象属性使用唯一标识符
let sym1 = Symbol()
let sym2 = Symbol()
console.log('sym', sym1 === sym2)

let sym3 = Symbol('foo')

let obj = {
  [sym1]: 11,
  [sym2]: 22,
  [sym3]: 33
}
let symStr = sym1.toString()
sym1.valueOf()


console.log(11)