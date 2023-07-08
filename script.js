function addNumbers() {
    // อ่านค่าตัวเลขที่ผู้ใช้ป้อน
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    // บวกเลข
    var sum = number1 + number2;

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = "ผลลัพธ์: " + sum;
}
