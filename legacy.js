function checkLogin(inputPassword, storedPassword, userRole) {
    if (inputPassword !== storedPassword) {
        console.log("Mật khẩu sai!");
        return
    }

    console.log("Đăng nhập thành công!")

    const roleMessages = {
        admin: "Chào mừng quản trị viên.",
        editor: "Chào mừng biên tập viên."
    };

    const message = roleMessages[userRole] || "Chào mừng thành viên.";
    console.log(message);
}


checkLogin(0, "0", "admin");