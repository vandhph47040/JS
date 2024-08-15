const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click',function(event){
    event.preventDefault();
    //nhận input
    const userName = document.querySelector('#username')
    const passWord = document.querySelector('#password')

    //validate
    if(!userName.value){
        alert("Không để trống tên đăng nhập")
        userName.focus();
        return
    }
    if(!passWord.value){
        alert("Không để trống mật khẩu")
        passWord.focus()
        return
    }
    if(userName.value && passWord.value.length < 6 ){
        alert("Cần tối thiểu 6 ký tự")
        passWord.focus();
        return
    }

    //kiểm tra tk mk
    if(userName.value == 'vandh' && passWord.value == '123456'){
        alert("Đăng nhập thành công")
        // lưu vào local stograge
        localStorage.setItem("username",userName.value)
        //chuyển về trang danh sách
        window.location = 'index.html'
    }
    else{
        alert("Sai thông tin hoặc mật khẩu")
    }
})