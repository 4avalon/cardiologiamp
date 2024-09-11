console.log("JS executado");
// 1. Função para alternar o menu no modo mobile
function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    if (menuList) {  // Verificação para garantir que o elemento existe
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
            console.log("Menu fechado");
        } else {
            menuList.style.display = "block";
            console.log("Menu aberto");
        }
    }
}

// 2. Função para adicionar a classe 'scrolled' ao menu ao rolar a página
window.onscroll = function() {
    var menu = document.getElementById("menu");
    if (menu) {  // Verificação para garantir que o elemento existe
        if (window.pageYOffset > 100) {
            menu.classList.add("scrolled");
            console.log("Menu rolado - classe 'scrolled' adicionada");
        } else {
            menu.classList.remove("scrolled");
            console.log("Menu no topo - classe 'scrolled' removida");
        }
    }
};

// 3. Função para fechar o menu após clicar em um link (mobile)
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll("#menu-list li a");
    var menuList = document.getElementById("menu-list");
    if (links && menuList) {  // Verificação para garantir que os elementos existem
        links.forEach(function(link) {
            link.addEventListener("click", function() {
                if (window.innerWidth <= 768) {  // Fecha o menu apenas em dispositivos móveis
                    menuList.style.display = "none";
                    console.log("Link clicado - Menu fechado no mobile");
                } else {
                    console.log("Link clicado - Não foi necessário fechar o menu (desktop)");
                }
            });
        });
    }
});
// 4. Função para rolar suavemente até a seção ao clicar em um link
document.querySelectorAll('#menu-list li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
        console.log("Deslizando suavemente para a seção: " + this.getAttribute('href'));
    });
});
