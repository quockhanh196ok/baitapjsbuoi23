// khối 1: Input 
// 5 số thực 

// khối 2: các bước xử lý
// b1: khai báo các biến
// b2: tạo hàm tính trung bình cộng của 5 số (a+b+c+d+e)/5
// b3: thông báo kết quả

// khối 3: output 
// trung bình cộng của 5 số thực

function tinhtrungbinh() {
    var numb1 = document.getElementById("num1").value;
    var numb2 = document.getElementById("num2").value;
    var numb3 = document.getElementById("num3").value;
    var numb4 = document.getElementById("num4").value;
    var numb5 = document.getElementById("num5").value;

    var trungbinh = (Number(numb1) + Number(numb2) + Number(numb3) + Number(numb4) + Number(numb5)) /5;

    document.getElementById("ketqua").innerHTML = trungbinh;


}

document.getElementById("btnkq").onclick = tinhtrungbinh;