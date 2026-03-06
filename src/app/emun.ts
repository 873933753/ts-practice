enum Types {
  UP = 'UP',
  Down = '1',
  Left = 2,
  Right = 3
}

console.log(Types['2']) // 输出Left，如果未定义枚举值则是index
console.log(Types.UP) // 输出0-不是Types['UP]

const value = 'UP'
if(value === Types.UP){
  console.log('go up')
}