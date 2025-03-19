// JavaScript Document
    function checkinput(){
        username=document.myform.username;
        password=document.myform.password;
        password1=document.myform.password1;
        hoten=document.myform.hoten;
        diachi=document.myform.diachi;
        email=document.myform.email;
        dienthoai=document.myform.dienthoai;
        reg1=/^[0-9A-Za-z]+[0-9A-Za-z_]*@[\w\d.]+.\w{2,4}$/;
        testmail=reg1.test(email.value);
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
        if(password1.value==""||password1.value!==password.value){
            alert("Mật khẩu lần 2 chưa khớp");
            password1.focus();
            return false;
        }
        if(hoten.value==""){
            alert("Hãy nhập vào họ tên của bạn");
            hoten.focus();
            return false;
        }
        if(diachi.value==""){
            alert("Chưa nhập địa chỉ");
            diachi.focus();
            return false;
        }
        if(!testmail){
            alert("Địa chỉ email không hợp lệ");
            email.focus();
            return false;
        }
        if(isNaN(dienthoai.value)){
            alert("Số điện thoại chưa chính xác");
            dienthoai.focus();
            return false;
        }
        else alert('OK, đã nhập đúng dữ liệu');
        return true;
    }