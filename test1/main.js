const bodyEL = document.querySelector('body');
const btnAdd = document.querySelector('.btn-add');

//kiểm tra đăng nhập
const username = localStorage.getItem('username');
if(username){
    bodyEL.innerHTML = `<h5 class="text-center">Xin chào ${username}</h5>` + bodyEL.innerHTML;
    const loginBtn = document.querySelector('#dangnhap');
    if (loginBtn) {
        loginBtn.style.display = 'none';
    }
}


//đăng xuất
const btnLogout = document.querySelector('#btn-logout')
btnLogout.addEventListener('click',function(){
    localStorage.removeItem('username')
    location.reload()
})

// lấy danh sách từ db
const getProducts = async function(){
    const response = await fetch(`http://localhost:3000/courses`);
    const data = await response.json();
    showProduct(data);
}
getProducts();

// hiển thị ra bảng
const showProduct = function(data){
    const show = data.map((item,index)=>{
        return `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${item.courseName}</td>
                <td>${item.views}</td>
                <td><img style= width:100px; src="${item.thumbnail}" alt=""></td>
                <td>
                    <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    <button data-id="${item.id}" class="btn-edit btn btn-warning">Sửa</button>
                </td>
            </tr>
        `
    }).join('')
   const tbody = document.querySelector('tbody');
   tbody.innerHTML = show;
   
   // nút xóa
   const btnDeletes = document.querySelectorAll('.btn-delete');
   btnDeletes.forEach(item =>{
    const id = item.dataset.id;
    item.addEventListener('click', function(){
        if(confirm("Bạn có chắc chắn muốn xóa không")){
            deletePro(id);
        }
    })
   })

   //  nút sửa
   const btnEdits = document.querySelectorAll('.btn-edit');
   btnEdits.forEach((item)=>{
    const id = item.dataset.id;
    item.addEventListener('click', function(){
        editPro(id);
    })
   })
   
}

//Xóa product
const deletePro = async function(id){
    try {
        const res = await fetch(`http://localhost:3000/courses/${id}`,{
            method : "delete"
        })
        if(res.ok){
            alert("Xóa thành công")
        }
        else{
            alert("Xóa thất bại")
        }
    } catch (err) {
        alert("Lỗi: "+ err)
    }
}

//Sửa
const editPro = async function(id) {
    const res = await fetch(`http://localhost:3000/courses/${id}`)
    const data = await res.json();
    bodyEL.innerHTML = `
        <h1 class="text-center">Sửa khóa học</h1>
        <form class="w-50 mx-auto">
            <div class="mb-3">
                <label class="form-label">Tên khóa học</label>
                <input type="text" value="${data.courseName}" id="courseName" class="form-control">
            </div>

            <div class="mb-3">
                <label class="form-label">Lượt xem</label>
                <input type="number" value="${data.views}" id="views" class="form-control">
            </div>
            
            <div class="mb-3">
                <label class="form-label">Hình ảnh</label>
                <input type="text" value="${data.thumbnail}" id="thumbnail" class="form-control">
            </div>
        
            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>
    `
    const btnSubmit = document.querySelector('#btn-submit')
    btnSubmit.addEventListener('click', function(event){
        event.preventDefault();
        
        // lấy các ô input
        const courseName = document.querySelector('#courseName')
        const views = document.querySelector('#views')
        const thumbnail = document.querySelector('#thumbnail')

        //validate
        if(!courseName.value){
            alert("Không được để trống tên khóa học");
            courseName.focus();
            return;
        }
        if(!views.value){
            alert("Không được để trống số lượng");
            views.focus();
            return;
        }
        if(!thumbnail.value){
            alert("Không được để trống hình ảnh");
            thumbnail.focus();
            return;
        }

        const dataUpdate = {
            id: data.id,
            courseName: courseName.value,
            views: views.value,
            thumbnail: thumbnail.value
        }
        console.log(dataUpdate);
        
        updatePro(dataUpdate);
    })   
}
// update
const updatePro = async function(data) {
    try {
        const res = await fetch(`http://localhost:3000/courses/${data.id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        if(res.ok){
            alert("Cập nhật thành công");
        }
        else{
            alert("Cập nhật thất bại")
        }
    } catch (err) {
        alert("Lỗi: " + err)
    }
}

//Thêm mới
btnAdd.addEventListener('click', function(){
    bodyEL.innerHTML = `
        <h1 class="text-center">Thêm mới</h1>
        <form class="w-50 mx-auto">
            <div class="mb-3">
                <label class="form-label">Tên khóa học</label>
                <input type="text" value="" id="courseName" class="form-control">
            </div>

            <div class="mb-3">
                <label class="form-label">Lượt xem</label>
                <input type="number" value="" id="views" class="form-control">
            </div>
            
            <div class="mb-3">
                <label class="form-label">Hình ảnh</label>
                <input type="text" value="" id="thumbnail" class="form-control">
            </div>
        
            <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
        </form>
    `
    const btnSubmit = document.querySelector('#btn-submit')
    btnSubmit.addEventListener('click',function(event){
        event.preventDefault();
        const courseName = document.querySelector('#courseName')
        const views = document.querySelector('#views')
        const thumbnail = document.querySelector('#thumbnail')

        //validate
        if(!courseName.value){
            alert("khong de trong ten");
            courseName.focus();
            return;
        }
        if(!views.value){
            alert("khong de trong luot xem");
            views.focus();
            return;
        }
        if(!thumbnail.value){
            alert("khong de trong anh");
            thumbnail.focus();
            return;
        }
        const data = {
            courseName: courseName.value,
            views: views.value,
            thumbnail: thumbnail.value
        }
        addPro(data);
    })
})

//Thêm mới
const addPro = async function(data){
    try {
        const res = await fetch('http://localhost:3000/courses',{
            method: "post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if(res.ok){
            alert("Thêm thành công")
        }
        else{
            alert("Thêm thất bại")
        }
    } catch (err) {
        alert("Lỗi: " + err)
    }
}

