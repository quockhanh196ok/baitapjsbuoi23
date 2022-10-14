// Khối 1: input(dữ liệu được cung cấp)
//     * chiều cao và chiều rộng hình chữ nhật
//         *       
//  * 
//  * Khối 2: Các bước xử lý
//     * B1: khai báo biến và lưu giá trị input
//         * B2: Lập công thức tính toán
//             * chu vi = (dài + rộng)*2
            // diện tích = dài * rộng
//                 * B3: thông báo kết quả
//                     * 
//  * Khối 3: Output(kết quả đạt được)
//     chu vi, diện tích


var chieudai = 0;
var chieurong = 0;

 chieudai = document.getElementById("dai").value;
 chieurong = document.getElementById("rong").value;

function dientich() {
    var s = chieudai*chieurong;

    document.getElementById("txtdientich").innerHTML = s;
}

function chuvi() {
    var cv = (chieudai + chieurong)*2;

    document.getElementById("txtchuvi").innerHTML = cv;
}

document.getElementById("btndientich").onclick = dientich;

document.getElementById("btnchuvi").onclick = chuvi;