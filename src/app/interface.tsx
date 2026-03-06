/* 
interface - 约束对象的类型和结构
extends

Question:interface 和 type(类型别名) 的区别有哪些？什么时候用 interface，什么时候用 type？
1）扩展方式不同-interface使用extends，type使用&
2) interface 支持声明合并,type会报错
3）interface 主要用于定于对象结构，type更灵活-可定义元组类型、联合类型等
能用 interface 就用 interface，需要更灵活的表达时用 type。
*/

/* 
type inference - 类型推断
type assertion - 类型断言  as
type guard - 类型守卫
*/

interface IPerson {
  name:string,
  age: number,
  sexy?:string, // 可选属性
  readonly id:number // 只读属性
}

type Person = {
  name:string,
  age: number
}

//1） interface继承 - interface使用extends，type使用 &
interface IStudent extends IPerson { //IStudent继承IPerson的属性
  grade:number,
  school:string
}

type Student = Person & {
  grade:number
}

// 2）重复声明合并 - interface支持，type不支持
interface IPerson { //最终IPerson包含5个属性
  hobby:string
}

// 3)interface描述函数
interface Iadd {
  (x:number,y:number):number
}

const addfunction:Iadd = (x,y)=> {
  return x + y
}
addfunction(1,2)


export default function Interfacepage() {
  const hanber:IPerson = {
    name: 'hanber',
    age:18,
    id:123,
    hobby:'snow'
  }
  // hanber.id = 456 - error

  const alco:IStudent = {
    name: 'alco',
    age:18,
    id:456,
    grade:1,
    school:'beijing university'
  }


  return (
    <div>
      Interfacepage
    </div>
  );
}
