/* js 类型：1）基本类型：number、string、boolean、null、undefined、symbol、bigint
bigint - 用于表示任意精度的整数,number精度超出会丢失 2^53 - 1
2）对象类型：Object、Array、Function、Date、RegExp等
// 元组类型：使用 [type1, type2, ...] 定义一个固定长度和类型的数组

*/
export default function Home() {
  /* 基本类型 */
  // string
  const str:string = 'hi';
  // number
  const num:number = 123
  // boolean
  const isShow:boolean = false
  // null
  const nullValue:null = null
  // undeined
  const undefinedValue:undefined = undefined;
  // mix 
  type StrOrNum = string | number
  const a:StrOrNum = '11'// 这里只能是string或者number类型

  /* 复杂类型 */
  // arr
  const arr:string[] = ['1','2','3']
  arr.push('4')
  const arr2:[string,number] = ['1',2] //tuple-元组类型，明确数组中的每个位置的元素类型
  


  return (
    <div>
      HomePage
    </div>
  );
}
