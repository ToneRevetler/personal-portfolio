const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefaul()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


var typed = new Typed('#typed',{
    strings:["Designer Fullstack","Designer Gráfico","Desenvolvedor Front End"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const input = "mirandatone@outlook.com"

function copyToClipboard(){
    navigator.clipboard.writeText(input).then(() =>{
        
        const clickParaCopiar = document.getElementById('textoClickCopiar')
        clickParaCopiar.innerHTML = 'Email copiado!!'

        setTimeout(function(){
            clickParaCopiar.innerHTML="Clique para copiar!";
        },2000)
    })
}