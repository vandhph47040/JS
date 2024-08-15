// Declaration Function

function sayHello(name){
    return `Hello ${name}`;
}

// console.log(sayHello('chinhpd5'));

// Expression Function

const sayHello1 = function (name){
    return `Hello ${name}`
}

// console.log(sayHello1('chinhpd6'));

// Arrow Function (ES6)

const sayHello2 = (name) => {
    return `Hello ${name}`
}

// console.log(sayHello2('chinhpd7'));



// Default Parameter 
const sum = (a,b=0) => a+b;

// console.log(sum(3));

// Destructuring

var array = [1,2,3]

var [a,,c] = array

// console.log(a);
// // console.log(b);
// console.log(c);

var info = {
    name: "chinhpd5",
    age: 20,
    child:{
        name:"chinhpd6"
    }
}

var {name,age,child: {name: childName}} = info

// console.log(name);
// console.log(age);
// console.log(childName);

const showInfo = ( {name,age,child: {name: childName}} ) =>{
    console.log(name);
    console.log(age);
    console.log(childName);
}

// showInfo(info)

// Rest Parameter : Phần còn lại ...

var array =[1,2,3,4,5]

var [a,b,...rest] = array;

// console.log(a);
// console.log(b);
// console.log(rest);

var obj = {
    name: "chinhpd5",
    age: 20,
    mark: 10
}

var {name,...restObj} = obj

// console.log(name);
// console.log(restObj);

const SUM  = (a,...rest)=>{
    rest.forEach((item)=>{
        a += item
    })
    return a
}

// console.log(SUM(1,2,3));
// console.log(SUM(1,2,3,5,6,7));

// spread ... (với mảng hoặc object cũ)

var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]

var newArr = [...arr1, ...arr2]
// var {name,...restObj} = obj // tạo ra 1 mảng hoặc object mới

// console.log(newArr);

var obj1 ={
    name: "chinhpd5",
    age: 20
}

var obj2 ={
    name: "chinhpd6"
}

var newObj = {...obj1, ...obj2}

// console.log(newObj);

// var a = 1;
// var b = a; //1

// a = 2;

// console.log(a); //2
// console.log(b); //1

var a = {name: "chinhpd5"}; //array , object
var b = a; // gán vị trí nhớ

a.name = "chinhpd6";

// console.log(a); // "chinhpd6"
// console.log(b); // "chinhpd6"

// kiểu tham trị (number , string , boolean) và kiểu tham chiếu (array, object)


var a = {name: "chinhpd5"}; 

var b = {...a}; 

a.name = "chinhpd6";

// console.log(a); // "chinhpd6"
// console.log(b); // "chinhpd5"

// Cách phương thức làm việc với mảng

const DATA =[
    {
        name: "chinhpd5",
        age: 20,
        gender: true,
        mark :10
    },
    {
        name: "chinhpd6",
        age: 21,
        gender: false,
        mark :9
    },
    {
        name: "chinhpd7",
        age: 20,
        gender: true,
        mark :8
    },
    {
        name: "chinhpd5",
        age: 21,
        gender: false,
        mark :9
    }
]

// forEach

let trElement=''
DATA.forEach((item,index)=>{
    trElement += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${ item.gender ? 'Nam' : 'Nữ' }</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
})


// console.log(trElement);

let tbodyElement = document.querySelector('tbody');
// console.log(tbodyElement);
tbodyElement.innerHTML = trElement;

/**
 * map
 * filter
 * reduce
 * find
 * some
 * every
 * forEach
 */
