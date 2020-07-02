function bmi() {
    var chieucao = document.getElementById('chieucao').value;
    var cannang = document.getElementById('cannang').value;
    var cao = parseFloat(chieucao);
    var nang = parseFloat(cannang);
    chisobmi = nang / (cao * cao);

    if (chisobmi < 18.5){
            document.getElementById('hienthi').innerHTML = "ban qua gay";
    }
    else if (chisobmi <= 25){
        document.getElementById('hienthi').innerHTML = "ban binh thuong";
    }
    else if (chisobmi <= 30.0) {
        document.getElementById('hienthi').innerHTML = "ban hoi beo";
    }else {
        document.getElementById('hienthi').innerHTML = "ban qua beo";
    }
}