document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImg');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    // Função para abrir o modal e exibir a imagem ampliada
    function openModal(index) {
        currentIndex = index;
        modal.style.display = 'block';
        modalImg.src = galleryItems[index].src;
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Função para navegar entre as imagens no modal
    function navigate(direction) {
        currentIndex += direction;
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }
        modalImg.src = galleryItems[currentIndex].src;
    }

    // Adiciona eventos de clique às imagens da galeria
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index));
    });

    // Adiciona eventos de clique às setas de navegação
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));

    // Adiciona evento de clique ao botão de fechar o modal
    closeBtn.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora da imagem
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});