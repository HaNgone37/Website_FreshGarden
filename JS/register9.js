// Lay ra element 
const registerForm = document.getElementById("registerForm");
const username = document.getElementById("username");
const usermail = document.getElementById("usermail");
const password = document.getElementById("password");

// Lay du lieu tu localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

// Lang nghe su kien form dang ky
registerForm.addEventListener("submit", function(e){ // tham so mac dinh e
    // Ngan chan su kien load lai trang
    e.preventDefault();

    // Gui du lieu tu form len LocalStorage
    if(username.value && password.value && usermail.value){
        // Lay du lieu tu form va gop thanh doi tuong user
        const user = {
            userID: Math.ceil(Math.random() * 100000),
            userName: username.value,
            userEmail: usermail.value,
            userPassword: password.value,
        };

        // Push user vao trong mang userLocal
        userLocal.push(user);

        // Luu tru du lieu len local
        localStorage.setItem("users", JSON.stringify(userLocal));

        setTimeout(function(){
        // Chuyen huong ve trang dang nhap
        window.location.href = "loginpage.html";
    }, 1000);
    }
});
