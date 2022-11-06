const a = document.getElementById('photoshop');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 1850){
        a.classList.add('scrollShow');
    }
    else{
        a.classList.remove('scrollShow');
    }
})