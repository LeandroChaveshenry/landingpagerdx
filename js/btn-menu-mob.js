let btnMenuMob = document.querySelector('#btn-menu-mob');
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');
let menuMobile = document.querySelector('#menu-mobile');
let body = document.querySelector('body');

// Função para abrir/fechar o menu
function toggleMenu() {
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');
    menuMobile.classList.toggle('abrir');
    body.classList.toggle('no-overflow1');
}

// Evento para abrir/fechar o menu ao clicar no botão
btnMenuMob.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede a propagação do clique
    toggleMenu();
});

// Evento para fechar o menu ao clicar fora dele
body.addEventListener("click", () => {
    if (menuMobile.classList.contains('abrir')) {
        toggleMenu();
    }
});

// Impede o fechamento do menu ao clicar dentro do menu
menuMobile.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede a propagação do clique
});
