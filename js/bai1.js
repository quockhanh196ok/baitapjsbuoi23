// khối 1: input
// số ngày làm

// khối 2: các bước xử lý
// b1: khai báo biến 
// b2: tạo hàm tính lương = số ngày làm * 100000
// b3: thông báo kết quả

// khối 3: output
// tiền lương trong tháng

function luong () {
    var songay = document.getElementById("songaylam").value;
    var luongnhan = songay*100000;

    document.getElementById("txtluong").innerHTML = luongnhan + "đ";
}

document.getElementById("btnluong").onclick = luong;