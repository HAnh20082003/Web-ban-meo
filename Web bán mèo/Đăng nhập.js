// JavaScript Document
    function checkinput(){
        username=document.myform.username;
        password=document.myform.password;
        password1=document.myform.password1;
        reg1=/^[0-9A-Za-z]+[0-9A-Za-z_]*@[\w\d.]+.\w{2,4}$/;
        if(username.value==""){
            alert("Hãy chọn tên đăng nhập");
            username.focus();
            return false;
        }
        if(password.value==""){
            alert("Chưa nhập mật khẩu");
            password.focus();
            return false;
        }
        else alert('OK, đã nhập đúng dữ liệu');
        return true;
    }// JavaScript Document