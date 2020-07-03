function yes() {
        alert("<3")
}
function no() {
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('khong').style.left = x + 'px';
    document.getElementById('khong').style.top = y + 'px';
}

