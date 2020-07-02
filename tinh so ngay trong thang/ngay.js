function tinhtoan() {
    var thang = document.getElementById('thang').value;
    var a = parseFloat(thang);
    var songay = 0;
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.write("thang nay co 31 ngay");
                break;
        case 2:
            document.write("Thang 2 co 28 hoac 29 ngay");
                break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.write("thang nay co 30 ngay");
                break;
    }
}
