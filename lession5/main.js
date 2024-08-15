import title, {home,age} from "./services.js";

// console.log(title);
// console.log(home);
// console.log(age);


import {getUsers,addUser,deleteUser,getUserById,updateUser} from './services.js'


const showUsers = async function(){
    const data = await getUsers();
    // console.log(data);
    // return;
    const trElement = data.map((item,index)=>{
        return `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${item.username}</td>
                <td>${item.password}</td>
                <td>${item.age}</td>
                <td>
                    <img style="height:50px" src="${item.image}" alt="">
                </td>
                <td>${item.note}</td>
                <td>
                    <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    <button data-id="${item.id}" class="btn-edit btn btn-warning">Sửa</button>
                </td>
            </tr>
        `
    }).join('');

    // console.log(trElement);
    const tbodyElement = document.querySelector('tbody');
    tbodyElement.innerHTML = trElement;

    // xóa
    const btnDeletes = document.querySelectorAll('.btn-delete')
    // console.log(btnDeletes);
    btnDeletes.forEach((item)=>{
        item.addEventListener("click",function(){
            const id = item.dataset.id;
            // console.log(id);
            deleteUser(id)
        })
    })

    //sửa
    const btnEdits = document.querySelectorAll('.btn-edit')

    btnEdits.forEach((item)=>{
        item.addEventListener("click",function(){
            const id = item.dataset.id;
            // console.log(id);

            showUserById(id)
        })
    })
}

showUsers()

//delete


//add
const btnAdd = document.querySelector('#btn-add');
const body = document.querySelector('body')

btnAdd.addEventListener("click", function(){
    body.innerHTML = `
        <h1>Thêm mới user</h1>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">username</label>
                <input type="text" class="form-control" id="username" >
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age">
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input type="text" class="form-control" id="image">
            </div>
             <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <input type="text" class="form-control" id="note">
            </div>
            
            <button id="btn-submit" type="submit" class="btn btn-primary">Submit</button>
        </form>
    `

    const btnSubmit = document.querySelector('#btn-submit')
    btnSubmit.addEventListener('click',function(e){
        e.preventDefault();

        const inputUsername = document.querySelector('#username')
        const inputPassword = document.querySelector('#password')
        const inputAge = document.querySelector('#age')
        const inputImage = document.querySelector('#image')
        const inputNote = document.querySelector('#note')

        // validate

        if(!inputUsername.value){
            alert("Không để trống username");
            inputUsername.focus();
            return;
        }

        if(!inputPassword.value){
            alert("Không để trống password");
            inputPassword.focus();
            return;
        }

        if(!inputAge.value){
            alert("Không để trống age");
            inputAge.focus();
            return;
        }

        if(!inputImage.value){
            alert("Không để trống image");
            inputImage.focus();
            return;
        }

        if(!inputNote.value){
            alert("Không để trống note");
            inputNote.focus();
            return;
        }

        const data ={
            username: inputUsername.value,
            password: inputPassword.value,
            age: inputAge.value,
            image: inputImage.value,
            note: inputNote.value
        }

        // console.log(data);
        addUser(data)

    })
})



// sửa
const showUserById = async function(id){
    
    //gọi dữ liệu user
    const user = await getUserById(id);

    // console.log(user);
    body.innerHTML = `
        <h1>Cập nhật user</h1>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">username</label>
                <input type="text" class="form-control" id="username" value="${user.username}">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" value="${user.password}">
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age" value="${user.age}">
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input type="text" class="form-control" id="image" value="${user.image}">
            </div>
             <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <input type="text" class="form-control" id="note" value="${user.note}">
            </div>
            
            <button id="btn-submit" type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
    const btnSubmit = document.querySelector('#btn-submit')
    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();

        const inputUsername = document.querySelector('#username')
        const inputPassword = document.querySelector('#password')
        const inputAge = document.querySelector('#age')
        const inputImage = document.querySelector('#image')
        const inputNote = document.querySelector('#note')

        // validate

        if(!inputUsername.value){
            alert("Không để trống username");
            inputUsername.focus();
            return;
        }

        if(!inputPassword.value){
            alert("Không để trống password");
            inputPassword.focus();
            return;
        }

        if(!inputAge.value){
            alert("Không để trống age");
            inputAge.focus();
            return;
        }

        if(!inputImage.value){
            alert("Không để trống image");
            inputImage.focus();
            return;
        }

        if(!inputNote.value){
            alert("Không để trống note");
            inputNote.focus();
            return;
        }

        const data ={
            id: user.id,
            username: inputUsername.value,
            password: inputPassword.value,
            age: inputAge.value,
            image: inputImage.value,
            note: inputNote.value
        }

        // console.log(data);
        updateUser(data)
    })

}

