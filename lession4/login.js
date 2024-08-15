const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener('click', function(e){
    // ngăn chặn hành vi tải trang
    e.preventDefault();

    // nhận input
    const inputUsername = document.querySelector('#username')
    const inputPassword = document.querySelector('#password')

    // validate

    if(!inputUsername.value){
        alert("Không để trống username")
        inputUsername.focus();
        return
    }

    if(!inputPassword.value){
        alert("Không để trống password")
        inputPassword.focus();
        return
    }

    if(inputPassword.value && inputPassword.value.length < 6){
        alert("Password cần tối thiểu 6 ký tự")
        inputPassword.focus();
        return
    }

    // Kiểm tra tài khoản mật khẩu
    if(inputUsername.value == 'chinhpd5' && inputPassword.value == '123456'){
        alert("Đăng nhập thành công")

        // lưu trữ trạng thái vào local stograge
        localStorage.setItem("username",inputUsername.value)

        // chuyển về trang danh sách
        window.location = 'index.html'

    }else{
        alert("Sai thông tin tài khoản hoặc mật khẩu")
    }

})