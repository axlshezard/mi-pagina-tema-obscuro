const botonTema = document.getElementById('botonTema');


botonTema.addEventListener("clic", () => {
    document.body.classList.contains("tema-claro")
    if(document.body.classList.contains("tema-claro")){
        botonTema.textContent = "cambiara tema obscuro";
        
    }
    else    {
        botonTema.textContent = "cambiar a Tema Claro";
        
    }


});