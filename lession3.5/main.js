// Xử lý bất đồng bộ JS(đơn luồng)

// setTimeOut, setInterval, call api(fetch, ajax,...), load, click,... 
// -> xử lý bất đồng bộ 

// console.log("Việc 1"); //1

// // chờ 2s thực thi nhiệm vụ trong hàm
// setTimeout(()=>{
//     console.log("Việc 2"); // chờ 2s in 2
// },0)

// console.log("Việc 3"); //3

//1 3 2

//1 2 3

// call stack : thực thi logic đồng bộ
// web api : thực thi logic bất đồng bộ

// 3 cách để xử lý bất đồng bộ
// callback
// promise
// async | await

// call back: hàm gọi lại 
// truyền dưới dạng 1 tham số trong 1 function khác

function sayHello(name){
    console.log(`Hello ${name}`);
}

function doing(callback){
    callback("chinhpd5")
}

// doing(sayHello)

function delay(ms,callback){
    // fake 1 tác vụ bất đồng bộ
    setTimeout(()=>{
        let data = "Đang thực thi ..."
        callback(data);
    },ms)
}

function doing1(){
    // việc 1
    console.log("Bắt đầu");
    delay(2000,(data)=>{
        console.log(data);
        console.log("Kết thúc 1");

        // Việc 2
        console.log("Bắt đầu 2");
        delay(3000,(data)=>{
            console.log(data);
            console.log("Kết thúc 2");

            // Việc 3
            console.log("Bắt đầu 3");
            delay(1000,(data)=>{
                console.log(data);
                console.log("Kết thúc 3");

                // Việc 4
                console.log("Bắt đầu 4");
                delay(1000,(data)=>{
                    console.log(data);
                    console.log("Kết thúc 4");
                })
            })
        })
    })
}

// doing1();


//callback hell
// promise : lời hứa

const myPromise = new Promise((resolve,reject)=>{
    const isCheck = true; //false

    if(isCheck){
        // nếu thành công
        resolve("Thành công")
    }else{
        // nếu thất bại
        reject("Thất bại")
    }
})


const doPromise = function(){
    myPromise
        // nếu thành công
        .then((success)=>{
            console.log(success);
            return myPromise
        })
        .then((data)=>{
            console.log(data);
        })
        // nếu thất bại
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log("Hoàn thành");
        })
}

// doPromise();

const delay2 = function(ms){
    // fake tác vụ bất đồng bộ
    return new Promise((resolve,reject)=>{
        const isCheck = true;
        setTimeout(()=>{

            if(isCheck){
                resolve("Đang thực thi ...")
            }else{
                reject("Có lỗi")
            }

        },ms)
    })
}

const doing2 = function(){
    delay2(1000)
        // việc 1
        .then((data)=>{
            console.log("Bắt đầu");
            console.log(data);
            console.log("Kết thúc");

            return delay2(2000)
        })
        // việc 2
        .then((data)=>{
            console.log("Bắt đầu 2");
            console.log(data);
            console.log("Kết thúc 2");

            return delay2(2500)
        })
        // việc 3
        .then((data)=>{
            console.log("Bắt đầu 3");
            console.log(data);
            console.log("Kết thúc 3");
        })
        .catch((err)=>{
            console.log(err);
        })
}

// doing2();

// async / await

const doing3 = async function(){
    // việc 1
    console.log("Bắt đầu");

    const data = await delay2(1000); // bất đồng bộ
    console.log(data);

    console.log("Kết thúc");


    // việc 2
    console.log("Bắt đầu 2");

    const data2 = await delay2(2000); // bất đồng bộ
    console.log(data2);

    console.log("Kết thúc 2");

    // việc 3
    console.log("Bắt đầu 3");

    const data3 = await delay2(2000); // bất đồng bộ
    console.log(data3);

    console.log("Kết thúc 3");
}


// doing3()

const getDataCallback = function(callback){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            // console.log(data);
            callback(data,null)
        })
        .catch((err)=>{
            callback(null,err)
        })
}


// getDataCallback((data, error)=>{
//     if(error){
//         alert("Lỗi: "+ error)
//     }
//     else{
//         console.log(data);
//         // xử lý các tác vụ tiếp theo
//     }
// });


const getDataPromise= function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            // thực thi các tác vụ tiếp theo
        })
        .catch((err)=>{
            alert("lỗi: "+ err)
        })
}

// getDataPromise();

const getDataAsync = async function(){
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        alert("Có lỗi: "+ error)
    }
}

// getDataAsync();