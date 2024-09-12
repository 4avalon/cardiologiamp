// Função para adicionar o efeito de joystick ao scroll
console.log(`Js Joystick on`);
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    // Calcula a velocidade do joystick (o quão rápido a barra de rolagem está sendo puxada)
    const velocity = scrollPosition / (totalHeight - windowHeight) * 100;

    // Log de teste para verificar a velocidade
    console.log(`Joystick puxado - velocidade: ${velocity}`);

    // Aqui você pode adicionar uma animação ao thumb da barra de rolagem, se necessário.
});
