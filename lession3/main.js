// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */


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
        name: "chinhpd8",
        age: 21,
        gender: false,
        mark :9
    }
]

// find : tìm 1 phần tử trong mảng thỏa mãn điều kiện gần nhất
// sau khi tìm xong -> kết thúc vòng lặp

let findItem = DATA.find((item,index)=>{
    // return item.name == "chinhpd6"
    // console.log(index);
    return item.gender == false
})

let findItem1 = DATA.find((item,index) => item.name == "chinhpd6")

// console.log(findItem);


// some (boolean): duyệt mảng, kiểm tra xem trong mảng 
// có ÍT NHẤT 1 PHẦN TỬ thỏa mãn điều kiện
// nếu thỏa mãn -> kết thúc vòng lặp

const checkAge = DATA.some((item,index)=>{
    // console.log(index);
    // kiểm tra xem trong mảng có phần tử có tuổi bằng 20
    return item.age == 21
    // return item.mark > 10
}) 

// console.log(checkAge);

// every (boolean): duyệt mảng, kiểm tra xem mảng
// Nếu có phần tử trong mảng không thỏa mãn ĐK -> false -> kết thúc vòng lặp
// Nếu TẤT CẢ CÁC PHẦN TỬ thỏa mãn điều kiện -> true

const checkMark = DATA.every((item,index)=>{
    // kiểm tra các phần tử trong mảng có giá trị điểm nhỏ hơn hoặc bằng 5
    // console.log(index);
    // return item.mark <= 5
    return item.mark >= 8
})

// console.log(checkMark);

// map: duyệt qua tất cả các phần tử trong mảng
// nếu có 'return' trả 1 mảng mới

let newData = DATA.map((item,index)=>{
    return {
        ...item, //spread
        mark: "Điểm: "+ item.mark
    }
})

// console.log(newData);


// filter: duyệt qua 1 mảng
// trả về 1 mảng mới chứa các phần tử thỏa mãn điều kiện

let newFilter = DATA.filter((item,index)=>{
    return item.mark >= 9
})

// console.log(newFilter);

let trElement = newFilter.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.gender ? "Nam" : "Nữ"}</td>
            <td>${item.age}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join('') // join: chuyển mảng về 1 chuỗi

// console.log(trElement);
let tbodyElement = document.querySelector('tbody');
// console.log(tbodyElement);
tbodyElement.innerHTML = trElement;

// reduce : duyệt mảng và tính toán
// value: lưu trữ giá trị qua các lần lặp
// item: các phần tử trong mảng
// index: vị trí các phần tử
// array: mảng ban đầu

const total = newFilter.reduce((value,item,index,array)=>{
    return value= value + item.mark
},0)

console.log(total);




