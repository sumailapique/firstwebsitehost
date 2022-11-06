const x = document.getElementById('scroll-top');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset < 50){
        x.classList.add('active');
    }
    else{
        x.classList.remove('active');
    }
})