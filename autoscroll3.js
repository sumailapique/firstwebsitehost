const c = document.getElementById('Figma_XD');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 1900){
        c.classList.add('scrollShow3');
    }
    else{
        c.classList.remove('scrollShow3');
    }
})