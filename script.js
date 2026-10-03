// 1. Configura todos os botões de editar de uma vez
document.querySelectorAll("[id^='botao_editar']").forEach(botao => {
    botao.addEventListener("click", function () {
        alert("Você clicou no botão Editar");
    });
});

// 2. Configura todos os botões de excluir de uma vez
document.querySelectorAll("[id^='botao_excluir']").forEach(botao => {
    botao.addEventListener("click", function () {
        const continuar = confirm("Deseja realmente excluir o usuario?");

        if (continuar) {
            alert("Você escolheu excluir o usuario");
        } else {
            alert("Você manteve o usuario");
        }
    });
});

// 3. Botão adicionar (continua igual, pois é único)
const btnAdicionar = document.querySelector(".adicionar");

if (btnAdicionar) {
    btnAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "php/adicionar.php";
    });
}