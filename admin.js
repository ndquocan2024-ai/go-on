const userRole = prompt('Nhập vai trò (ADMIN/MANAGER/EMPLOYEE): ');
const activeInput = prompt('Tài khoản có đang hoạt động không? (true/false): ');

const isAccountActive = activeInput.trim().toLowerCase() === 'true';

kiemTraQuyenTruyCap(userRole.trim().toUpperCase(), isAccountActive);

function kiemTraQuyenTruyCap(userRole, isAccountActive) {
    if (isAccountActive === false) {
        alert("Tài khoản bị khóa");
        return;
    }

    switch (userRole) {
        case "ADMIN":
            alert("Cho phép truy cập toàn bộ");
            break;
        case "MANAGER":
            alert("Cho phép chỉnh sửa hạn chế");
            break;
        case "EMPLOYEE":
            alert("Chỉ phép xem");
            break;
        default:
            alert("Từ chối truy cập");
    }
}