// Função para alternar o menu no mobile
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('open'); // Alterna a classe "open"
}

// Função para adicionar a classe "scrolled" ao menu ao rolar a página
window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

// Fechar o menu ao clicar em um item (somente para smartphones)
document.querySelectorAll('.menu ul li a').forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {  // Verifica se está em um dispositivo móvel
            const menu = document.querySelector('.menu ul');
            menu.classList.remove('open'); // Fecha o menu após clicar em um link
        }
    });
});

// Função para esconder o ícone de três traços em telas maiores e garantir que o menu se comporte corretamente
window.addEventListener('resize', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu ul');
    if (window.innerWidth > 768) {
        menuIcon.style.display = 'none'; // Esconde o ícone de três traços
        menu.classList.remove('open'); // Garante que o menu esteja fechado
    } else {
        menuIcon.style.display = 'block'; // Mostra o ícone de três traços em dispositivos móveis
    }
});
