import '../style/loader.scss';
import imagesLoaded from "imagesloaded";




let intro = document.querySelector('.intro');
let letter = document.querySelector('.welcome-header');
let letterSpan = document.querySelectorAll('.letter');
let splashLogo = document.getElementById('pic')

window.addEventListener('DOMContentLoaded', ()=>{

    imagesLoaded(document.querySelectorAll("img"), () => {
        setTimeout(()=>{

            setTimeout(()=>{
                letterSpan.forEach((span, idx) =>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    },(idx + 1) * 50)
                })
            },500)
    
            setTimeout(()=>{
                splashLogo.classList.add('active');
            }, 500)
    
            setTimeout(()=>{
                intro.style.top = '-100vh';
                
            },1500)
        })

    })
    
})