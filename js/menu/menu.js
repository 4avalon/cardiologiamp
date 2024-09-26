// ==========================
// 1. Variáveis Globais
// ==========================
// Definição do tempo fixo para rolar entre seções (1600 ms)
let scrollDuration = 1600;

// ==========================
// 2. Função de Alternar o Menu no Modo Mobile
// ==========================
// Abre e fecha o menu ao clicar no ícone do menu no mobile
function toggleMenu() {
    var menu = document.getElementById("menu-list");
    var menuIcon = document.getElementById("menu-icon"); // Pega o ícone de hambúrguer

    // Verifica o estilo de display atual
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  // Abre o menu com display flex
        menu.classList.add("active"); // Adiciona a classe active para animação
menuIcon.innerHTML = "&nbsp;&times;&nbsp;"; // Adiciona dois espaços &nbsp; antes e depois do "X"
  // Troca o ícone para "X"
        menuIcon.classList.add("open");  // Adiciona a classe 'open' para o estilo de fundo fosco
        console.log("Menu aberto");
    } else {
        menu.classList.remove("active"); // Remove a classe active para animação
        menuIcon.innerHTML = "&#9776;";  // Volta para o ícone de hambúrguer
        menuIcon.classList.remove("open");  // Remove a classe 'open'
        setTimeout(() => {
            menu.style.display = "none";  // Fecha o menu após a animação
            console.log("Menu fechado");
        }, 300); // Tempo para aguardar a animação
    }
}

// ==========================
// 3. Função de Aplicar Classe 'Scrolled' ao Rolar
// ==========================
// Adiciona ou remove a classe 'scrolled' ao menu ao rolar a página
window.onscroll = function() {
    var menu = document.getElementById("menu");
    if (window.innerWidth > 768) {  // Aplica apenas em telas maiores que 768px
        if (window.pageYOffset > 100) {
            menu.classList.add("scrolled");
            console.log("Menu rolado - classe 'scrolled' adicionada");
        } else {
            menu.classList.remove("scrolled");
            console.log("Menu no topo - classe 'scrolled' removida");
        }
    } else { 
        // Remove a classe 'scrolled' automaticamente em telas menores que 768px
        menu.classList.remove("scrolled");
        console.log("Mobile - classe 'scrolled' removida");
    }
};

// ==========================
// 4. Função para Fechar o Menu no Mobile
// ==========================
// Fecha o menu após clicar em um link, apenas em dispositivos móveis
document.querySelectorAll("#menu-list li a").forEach(function(link) {
    link.addEventListener("click", function() {
        var menu = document.getElementById("menu-list");
        var menuIcon = document.getElementById("menu-icon"); // Pega o ícone de hambúrguer
        menuIcon.classList.remove("open");  // Remove a classe 'open'
        
        if (window.innerWidth <= 768) {  // Fecha o menu em telas menores que 768px
            menu.style.display = "none";
            menuIcon.innerHTML = "&#9776;";  // Volta para o ícone de hambúrguer
            console.log("Link clicado - Menu fechado no mobile");
        } else {
            console.log("Link clicado - Não foi necessário fechar o menu (desktop)");
        }
    });
});


// ==========================
// 5. Função para Rolar Suavemente com Tempo Fixo
// ==========================
// Rola a página suavemente até a posição alvo com tempo fixo
function smoothScrollFixedTime(targetPosition) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = scrollDuration;  // Define o tempo fixo para rolagem (1600 ms)
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const scrollY = startPosition + (distance * (progress / duration));

        window.scrollTo(0, scrollY);

        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, targetPosition);  // Garante que o destino final seja alcançado
        }
    }

    window.requestAnimationFrame(step);
}

// ==========================
// 6. Ativa a Rolagem Suave ao Clicar nos Links
// ==========================
// Vincula a função de rolagem suave ao clicar nos links do menu
document.querySelectorAll('#menu-list li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Previne o comportamento padrão do link
        const section = document.querySelector(this.getAttribute('href'));
        const sectionPosition = section.offsetTop;
        smoothScrollFixedTime(sectionPosition);  // Inicia a rolagem suave até a seção alvo
    });
});
