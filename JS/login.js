
//Lay element
const loginForm = document.getElementById("loginForm");
const loginMail = document.getElementById("loginMail");
const loginPass = document.getElementById("LoginPass");

//Lang nghe su kien submit form 
loginForm.addEventListener("submit", function(e){
    //Ngan chan su kien load lai trang
    e.preventDefault();

    //Lay du lieu tu Local ve
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    //Tim kiem email va mat khau xem co ton tai hay khong
    const findUser = userLocal.find(
        (user) => user.userEmail === loginMail?.value && user.userPassword === loginPass?.value);

    if(!findUser){
        alert("Email hoặc mật khẩu không đúng!");
    } else{
        window.location.href="index.html";
    }
})
