/* 
type inference - 类型推断
type assertion - 类型断言  as
type guard - 类型守卫
*/


/* 约束函数输入值为数字，输出为string */
function add(x:number,y:number):string{
  return (x+y).toString()
}

const a =  add(1,2)
console.log(typeof a) // string

 // 联合类型
 type numOrStr = number | string;

 // 类型推断
 let str = '123'
 str = 1234 // 这里ts推断str是string所以不能赋值number类型

 // 类型断言
 function add2(x:numOrStr,y:number){
  const a =(x as string).length; //这里直接写x.length会报错，因为要是number和string的共有属性才可以，如果确定这里是string，那就用as进行类型断言
  // if(typeof x==='number')
  return a
 }


