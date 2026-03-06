/* 
  Generics - 泛型
  给类型写一个 “模板”，使用时再指定具体类型，就像函数接收值作为参数，泛型接收「类型」作为参数。

I think it's equivalent to writing a "template" to a type and then specifying a specific type when used, just like a function receives a value as a parameter and a generic receives a "type" as a parameter.

  泛型约束-extends（约束类型范围，接收指定类型）
*/


function add<T>(x:T):T{
  return x
}

const f_p_a:string = '123'
const f_a = add(f_p_a) //传入string类型
const f_b:number = add<number>(123)

function swap<T1,T2>(x:T1,y:T2):[T2,T1]{
  return [y,x]
}

const f_x:string = 'str'
const f_y:number = 123

const f_z = swap(f_x,f_y) // f_z类型是[number,string]

/* 泛型约束 */
function f_limit_1<T>(arg:T):number{
  return arg.length // 这样写arg不一定有length属性,报错
}

// 约束泛型必须有length属性
interface HasLen {
  length: number
}

function f_limit_2<T extends HasLen>(arg:T):number{
  return arg.length // 用extends关键字约束T必须包含length属性
}

f_limit_2([1])
f_limit_2('1')
f_limit_2(1) // 报错。number没有length属性


/* interface搭配泛型使用 */
interface IGeneric<T1,T2> {
  key:T1,
  value:T2
}

const f_obj_1:IGeneric<string,number> = {key:'string',value:123} // f_obj_1的属性类型分别是string、nimber
const f_obj_2:IGeneric<number,string> = {key:123,value:'string'} // f_obj_2的属性类型分别是number和string

const f_arr_1:number[] = [1,2]
// interface+泛型定义数组
const f_arr_2:Array<string> = ['1','2']
