//variables
//var a=6;
//var b=7;
//var _d="subham"
//console.log(a+b+8)
//console.log(typeof a ,typeof b, typeof _d)
//const a=9;
//console.log(a)
//{
//let a=77;
//console.log(a)
//}
//console.log(a)
//let cant be accesed outside of a block
//how to create objects in js
//using a key and a value pair
//let o={
    //"name":"Omkar",
    //"job code":5600,
    //"is_handsome":true
//}
//console.log(o)
//conditionals and expressions
/*let age=45;
if(age>15){
    console.log("you can drive")
}
else{
    console.log("you cant drive")
}*/
// let age =17;
// let grace=2;
// console.log(age+grace)
// if((age+grace)>18){
//     console.log("You can drive")
// }
// else{
//     console.log("You cannot drive")
// let age=15;
// if (age!=18){
//   console.log("you can drive")
// }
// else if(age==0){
//     console.log("are you kidding")
// }
// else{
//     console.log("you cannnot")
// }
//ternary operators:-
// a=6;
// b=8;
// let c= a>b?(a-b):(b-a);
//loops:-
// let a=1;
// console.log(a)
// console.log(a+1)
//but this can be replaced by loops:-
// let a=1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
//     }
// let obj={
//     name:"omkar",
//     role:"data scientist"
// }
// for(const key in obj){
//     console.log(key)
// }
// for (const key of obj) {
//     console.log(key)
// }    
// let i=5;
// while(i<6){
//     console.log(i)
//     i++;
// js functions:-if we want to repeat a block of code again and again
// function nice(name) {
//     console.log("hey"+name+"you are nice")
//     console.log("hey"+name+"you are nice")
// }
// nice()
// function sum(a,b,c=3){
//     return a+b+c
// }
// result1=sum(3,5)
// result2=sum(7,5)
//arrow function
// const fun1=()=>{
//     console.log("I am a function",x)
// }
// fun1(34);
//strings:-
// let name="Omkar"
// console.log(name)
// let a="omkar"
// console.log(a[0])
// console.log(a[1])
// let name="ommy"
// let frnd="sakti"
// console.log(`his real name is ${name} and his fnd name is ${frnd}`)
// let b="omkar"
// console.log(b.toUpperCase())
// console.log(b.length)
// console.log(b.slice(1,4))
// console.log(b.replace("Sh","77"))
// console.log(b.concat(b,"Aishwarya"))
// let c=" sou "
// console.log(c.trim())//removes white spaces
//arrays:-aek naam ke andar multiple values ko store karna
// let arr=[1,2,3,4,5,67,7]
// console.log(arr);
// console.log(arr[0])
// console.log(arr.length)
//typeof array:-
// let arr=[1,2,3,4,5,6,7,8]
// let arr2=[4,5,6,7,8,9,19]
// console.log(typeof arr)
// console.log(arr.toString())
//if we want to replace comma with and
// console.log(arr.join(" and "))
//if we wnat the last element of the array
// arr.pop()
// arr.push(100)
// console.log(arr)
//for removal of the first element:-
// arr.shift()
// console.log(arr)
// console.log(arr.concat(arr2))
//sort
// arr.sort()
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// arr.forEach((value,index,arr)=>{
//     console.log
// })
//map
// let arr=[1,13,14,15];
// let newArr=[]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element**2)
// }
// let newArr=arr.map((e,index,array)=>{
//   return e**2
// })
// console.log(newArr)
// newArr.filter()