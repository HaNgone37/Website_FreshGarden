// Lấy element
const loginForm = document.getElementById("loginForm");
const loginMail = document.getElementById("loginMail");
const loginPass = document.getElementById("LoginPass"); 

// Lắng nghe sự kiện submit form 
loginForm.addEventListener("submit", function(e){
    // Ngăn chặn sự kiện load lại trang
    e.preventDefault();

    // Lấy dữ liệu từ Local về
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    // Log giá trị để kiểm tra
    console.log("Email: ", loginMail.value);
    console.log("Password: ", loginPass.value);
    console.log("Users in Local Storage: ", userLocal);

    // Tìm kiếm email và mật khẩu xem có tồn tại hay không
    const findUser = userLocal.find(
        (user) => user.userEmail === loginMail.value && user.userPassword === loginPass.value);

    if (!findUser) {
        alert("Email hoặc mật khẩu không đúng!");
    } else {
        window.location.href = "index.html";
    }
});
