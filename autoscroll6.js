const f = document.getElementById('CSS');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 2130){
        f.classList.add('scrollShow6');
    }
    else{
        f.classList.remove('scrollShow6');
    }
})