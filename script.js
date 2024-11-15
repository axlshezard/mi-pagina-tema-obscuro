const boton_tema = document.getElementById('boton_tema');

boton_tema.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro"); // Usamos el nombre de clase consistente
    if (document.body.classList.contains("tema-claro")) {
        boton_tema.textContent = "Tema Oscuro"; // Texto correcto para alternar
    } else {
        boton_tema.textContent = "Tema Claro";
    }
});
