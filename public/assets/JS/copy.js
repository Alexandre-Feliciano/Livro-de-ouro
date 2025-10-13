const area_pix = document.getElementById("link_pix");
const alert_copia = document.getElementById("alert-copiar");

function mostrarAviso(mensagem){
    alert_copia.textContent = mensagem;
    alert_copia.classList.add("ativar");
    setTimeout(()=> {
        alert_copia.classList.remove("ativar");
    }, 2100)
};

area_pix.addEventListener("click", async function() {
    try{
        await navigator.clipboard.writeText(this.value);
        mostrarAviso("Pix copiado!");
    }catch(e){
        mostrarAviso("Erro ao copiar!")
    }
});