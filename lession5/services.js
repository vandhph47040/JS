// module (giới thiệu) ECMA

//export import

const title ="chinhpd5";
// có thể có nhiều export
export const home = "Hà Nội"
export const age =20

// trong 1 file có duy nhất 1 export default
export default title;



export const getUsers = async function(){
    const res = await fetch('http://localhost:3000/users');
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    // showUsers(data)
    return data;
}

export const addUser = async function(data){
    const res = await fetch('http://localhost:3000/users',
        {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
    )
    if(res.ok){
        alert("Thêm thành công")
    }else{
        alert("Thêm thất bại")
    }
}

export const deleteUser =async function(id){
    if(confirm("Bạn có chắc chắn muốn xóa không?")){
        const res = await fetch(`http://localhost:3000/users/${id}`,
            {
                method:'delete'
            }
        )
        if(res.ok){
            alert("xóa thành công")
        }else{
            alert("xóa thất bại")
        }
    }
}
export const getUserById =async function(id){
    // lấy thông tin user
    const res = await fetch(`http://localhost:3000/users/${id}`);
    const user = await res.json();
    return user
}

export const updateUser =async function(data){
    const res = await fetch(`http://localhost:3000/users/${data.id}`,
        {
            method:"put",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )

    if(res.ok){
        alert("Sửa thành công")
    }else{
        alert("Sửa thất bại")
    }
}
