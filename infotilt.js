const q = document.getElementById('info');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 300){
        q.classList.add('tilt');
    }
    else{
        q.classList.remove('tilt');
    }
})