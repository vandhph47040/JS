const btnAdd = document.querySelector('.btn-add');
const bodyElement = document.querySelector('body');

// Kiểm tra đăng nhập
const username = localStorage.getItem('username');
if(username){
    // console.log(username);
    bodyElement.innerHTML = `<h5>Xin chào ${username}</h5>` + bodyElement.innerHTML
}
// Đăng xuất
const btnLogout = document.querySelector('#btn-logout')

btnLogout.addEventListener('click',function(){
    localStorage.removeItem('username');
    location.reload()
})

//fetch
//Thêm mới: post
//Xóa: delete
//Sửa: put
//Lấy: get

// lấy danh sách sản phẩm từ db.json
const getProducts = async function(){
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();

    // console.log(data);
    showProducts(data)
}

getProducts();

// Hiển thị ra table
const showProducts = function(data){
    const trElement = data.map((item,index)=>{
        return `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>
                    <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    <button data-id="${item.id}" class="btn-edit btn btn-warning">Sửa</button>
                </td>
            </tr>
        `
    }).join('')

    // console.log(trElement);
    const tbodyElement = document.querySelector('tbody')
    // console.log(tbodyElement);
    tbodyElement.innerHTML = trElement

    // Xóa
    // lấy danh sách các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);
    // định nghĩa sự kiện click

    btnDeletes.forEach(item =>{
        // console.log(item);

        // lấy id của phần tử
        // C1:
        // const id = item.getAttribute("data-id") 

        // C2:
        const id = item.dataset.id;

        item.addEventListener('click',function(){
            // xóa phần tử theo id
            if(confirm("Bạn có chắc chắn muốn xóa không ?")){
                deleteProduct(id)
            }
        })
    })

    // Sửa
    const btnEdits = document.querySelectorAll('.btn-edit');

    btnEdits.forEach((item)=>{
        const id = item.dataset.id;
        item.addEventListener("click", function(){
            // console.log(id);
            // hiển tra dữ liệu ra form và update
            editProductById(id)
        })
    })
}



// xóa product
const deleteProduct =async function(id){
    try{
        const response = await fetch(`http://localhost:3000/products/${id}`,{
            method: "delete"
        })
    
        if(response.ok){
            alert("Xóa thành công")
        }else{
            alert("Xóa thất bại")
        }
    }catch(err){
        alert("Lỗi: "+ err)
    }
}

// Thêm mới
btnAdd.addEventListener('click',function(){
    // Tạo 1 form
    bodyElement.innerHTML =`
        <h1>Thêm mới sản phẩm</h1>
        <form>
            <div class="mb-3">
                <label class="form-label">Tên sản phẩm</label>
                <input type="text" id="name" class="form-control">
            </div>

             <div class="mb-3">
                <label class="form-label">Số lượng</label>
                <input type="number" id="quantity" class="form-control">
            </div>
           
            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>

    `
    // Tạo sự kiện submit form thêm mới
    const btnSubmit = document.querySelector('#btn-submit')
    btnSubmit.addEventListener('click', function(event){
        // ngăn chặn hành vi load trang 
        event.preventDefault();

        // lấy các ô input
        const inputName = document.querySelector('#name')
        const inputQuantity = document.querySelector('#quantity')

        // validate
        if(!inputName.value){
            alert("Không được để trống tên sản phẩm");
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("Không được để trống số lượng");
            inputQuantity.focus();
            return;
        }

        // lấy giá trị

        const data = {
            name: inputName.value,
            quantity: inputQuantity.value
        }

        // console.log(data);
        addProduct(data)

    })

})

// thêm product vào db.json
const addProduct = async function(data){
   try {
        const response = await fetch('http://localhost:3000/products',{
            method: "post", // thêm mới
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
            alert("Thêm thành công")
        }else{
            alert("Thêm Thất bại")
        }
   } catch (error) {
        alert("Lỗi: "+ error)
   }
}

//edit

const editProductById = async function(id){
    //lấy thông tin sản phẩm theo id
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json();
    // console.log(data);

    // Tạo 1 form
    bodyElement.innerHTML =`
        <h1>Sửa sản phẩm</h1>
        <form>
            <div class="mb-3">
                <label class="form-label">Tên sản phẩm</label>
                <input type="text" value="${data.name}" id="name" class="form-control">
            </div>

             <div class="mb-3">
                <label class="form-label">Số lượng</label>
                <input type="number" value="${data.quantity}" id="quantity" class="form-control">
            </div>
           
            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>

    `

    // cập nhật dữ liệu vào db.json
    // Tạo sự kiện submit form thêm mới
    const btnSubmit = document.querySelector('#btn-submit')
    btnSubmit.addEventListener('click', function(event){
        // ngăn chặn hành vi load trang 
        event.preventDefault();

        // lấy các ô input
        const inputName = document.querySelector('#name')
        const inputQuantity = document.querySelector('#quantity')

        // validate
        if(!inputName.value){
            alert("Không được để trống tên sản phẩm");
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("Không được để trống số lượng");
            inputQuantity.focus();
            return;
        }

        // lấy giá trị

        const dataUpdate = {
            id: data.id, //id
            name: inputName.value,
            quantity: inputQuantity.value
        }

        // console.log(dataUpdate);
        updateProduct(dataUpdate)

    })   
}

const updateProduct =async function(data){
    try {
        const response = await fetch(`http://localhost:3000/products/${data.id}`,{
            method:"put", // cập nhật
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
    
        if(response.ok){
            alert("Cập nhật thành công")
        }else{
            alert("Cập nhật thất bại")
        }
    } catch (error) {
        alert("Lỗi: "+ error)
    }
}