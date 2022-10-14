// khối 1: input
// số tiền đô la Mỹ

// khối 2: các bước xử lý
// b1: khai báo biến 
// b2: tạo hàm tính tiền Việt Nam = số tiền đô la * 23500
// b3: thông báo kết quả

// khối 3: output
// tiền việt nam tương ứng

function dola () {
    var sontiendo = document.getElementById("sodola").value;
    var tienviet = sontiendo*23500;

    document.getElementById("txtdola").innerHTML = tienviet + "đ";
}

document.getElementById("btndola").onclick = dola;