// Khối 1: Input
//  *   số nguyên dương có 2 chữ số (12,23,56)
//  *?  num, ten (hang chuc), unit (don vị)
//  * 
//  * Khối 2: Các bước xử lý
//  *      B1: Khai báo biến và gán giá trị
//  *      B2: lập công thức
//  *          bóc tách từng số: hang chuc, hang dơn vị
//  *       + lấy hàng chục (phép chia, phép lấy phần nguyên)
//  *          Math.floor(num / 10) => phần nguyên trong phép toán chia 10    
//  *   
//  *       + lấy hàng dơn vị  
//  *          - đem phần dư => lấy phần dư trong phép chia 10
//  *      B3: thông báo kết quả
//  * 
//  * Khối 3: Output
//  *   tổng của 2 chữ số  (12 => 1 + 2)

var ten = 0;
var unit = 0;
var total = 0;

var num = document.getElementById("so2chuso").value ;

function tong () {
    ten = Math.floor(num / 10);
    unit = num % 10;

    total = ten + unit;

    document.getElementById("txtso").innerHTML = total;
}

document.getElementById("btnso").onclick = tong;