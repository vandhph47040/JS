//var let const

// Kiểu dữ liệu
/**
 * Kiểu dữ liệu nguyên thủy
 * number: 1; -1; 2.4
 * string: 'chinhpd5'; "abc" ; `string`
 * boolean: true false
 * null
 * undefined
 * symbol
 * bigInt
 * 
 * Kiểu dữ liệu phức tạp
 * object: (object {}); (array [])
 */

// Toán tử

/**
 * TT số học: + - * / ** ...
 * TT gán: = += -= ,....
 * TT so sánh: > < == >= <= !=
 * TT logic: && || !
 */

// Biểu thức điều kiện

// if else
// switch case
//  toán tử tử 3 ngôi
const check = 1 < 2 ? true : false

// lặp
// while
// do while

// for, for in, for of ,forEach

const myArr= ["chinh","long","bình"];

// myArr.forEach(function (item,index){
    // console.log(item);
    // console.log(index);
// })

// for(let item of myArr){
//     console.log(item);
// }


// for(let index in myArr){
//     console.log(index);
//     console.log(myArr[index]);
// }


// for(let i=0;i < myArr.length ;i++){
//     // console.log(i);
//     console.log(myArr[i]);
// }


// DOM

// element
/**
 * id, class, tag
 * selector
 */

// const h1Heading = document.getElementById('heading') //trả về 1 object
// const h1Headings = document.getElementsByClassName('title-heading'); // trả về 1 mảng
// const h1Headings = document.getElementsByTagName('h1') // trả về 1 mảng

// console.log(h1Headings);


const h1Heading = document.querySelector('#heading');
// const h1Heading = document.querySelector('.title-heading');
// const h1Heading = document.querySelector('h1');

// const h1Headings = document.querySelectorAll('.title-heading');
// console.log(h1Headings);

// attribute
h1Heading.title= 'headingNews'
//img src
//a href 

h1Heading.setAttribute("data","title-1")

// console.log(h1Heading);

// text

console.log(h1Heading.innerText);
console.log(h1Heading.textContent);

// h1Heading.innerText = 'New heading'
// h1Heading.textContent = "Heading new" 

h1Heading.innerHTML = '<i>New Heading</i>'

// DOM EVENT

h1Heading.onclick= function(){
    console.log('chinhpd5');
}

// event listener


// Mảng
const arr = [1,2,3,4,5];
// map, filter, reduce, some, every,...

//push: thêm mới phần tử vào cuối mảng
//unshift: thêm mới phần tử vào đầu mảng

//pop: xóa phần tử cuối mảng
//shift: xóa phần tử đầu mảng

// slice : cắt mảng

// const newArr = arr.slice(1,3)

// console.log(newArr);

//splice

// arr.splice(2,1,10,11);

// console.log(arr);



