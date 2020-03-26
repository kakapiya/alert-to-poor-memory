// 是否润年
var getMaxY = y =>  Boolean(
	y % 4 ==0 && y % 100 != 0 || y % 400==0
)
var getAugNum = n => getMaxY(n) ? 29 : 28
// --获取年对应的月份
var getMothNum = y => ([ 31, getAugNum(y), 31, 30,  31, 30, 31,31, 30, 31, 30, 31 ])

// ----计算星期---
// 计算月份代码
let getMothCode = isR => isR ? '622503514624'.split('') : '521503514624'.split('')
// 计算年的代码
let getYearCode = a => {
    a += ''
    let y = + a.substr(a.length - 2, a.length - 1)
    return ((y / 4 + y) | 0) % 7
}
// --获取今天的星期
let getStarNV = (y, m, d) => {
    let mc = +getMothCode(getMaxY(y))[m - 1]
    let yc = getYearCode(y)
    return (d + mc + yc) % 7 
}

var week = (y, m, d) => Math.ceil(
        (getMothNum(y).filter((_, i) =>  i + 1 <= m).reduce((a, b) => a + b, 0) - (getMothNum(y)[m - 1] - d) + (getStarNV(y, m ,d) - 1)) / 7
    )
console.log(week(2020, 03, 26)-8)
// 一 二 三
// 31 1  2