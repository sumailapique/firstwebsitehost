function clickme(){
    var x = document.getElementById('passcode');
    var y = document.getElementById('show');
    var z = document.getElementById('hide');

    if(x.type === 'password'){
        x.type = 'text';
        y.style.display = 'none';
        z.style.display = 'block';
    }else{
        x.type = 'password';
        y.style.display = 'block';
        z.style.display = 'none';
    }
}