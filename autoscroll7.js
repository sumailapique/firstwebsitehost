const g = document.getElementById('SQL');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 2160){
        g.classList.add('scrollShow7');
    }
    else{
        g.classList.remove('scrollShow7');
    }
})