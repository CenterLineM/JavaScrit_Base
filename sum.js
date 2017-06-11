//JavaScript 當中的迴圈 -- for 與 while
//by 陳鍾誠

var sum = 0

for (var i = 1; i <= 100; i++) {
  sum = sum + i
  console.log(sum)
}
console.log('1+....+100 = ' + sum)

// 示範while

var sum1 = 0

i = 1
while (i <= 100) {
  sum1 = sum1 + i
  i++
}

console.log('1+2...+100 = ' + sum1)
