document.addEventListener('DOMContentLoaded', () => {
    // Função de busca
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        console.log('Termo de busca:', searchTerm); // Verifique o que está sendo digitado

        productCards.forEach(card => {
            const productName = card.textContent.toLowerCase();
            console.log('Nome do produto no card:', productName); // Verifique o texto de cada card
            const shouldDisplay = productName.includes(searchTerm);
            console.log('Deve exibir?', shouldDisplay); // Verifique se o card deve ser exibido
            card.style.display = shouldDisplay ? 'block' : 'none';
        });
    });

    // Efeito hover dinâmico
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});