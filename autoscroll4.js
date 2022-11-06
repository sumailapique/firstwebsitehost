const d = document.getElementById('Coreldraw');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 1930){
        d.classList.add('scrollShow4');
    }
    else{
        d.classList.remove('scrollShow4');
    }
})