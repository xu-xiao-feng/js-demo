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






console.log(11)