const b = document.getElementById('illustrator');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 1880){
        b.classList.add('scrollShow2');
    }
    else{
        b.classList.remove('scrollShow2');
    }
})