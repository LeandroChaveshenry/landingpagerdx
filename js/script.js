// Paginação
const pages = document.querySelectorAll('.gallery-page');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
let currentPage = 0;

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === pageIndex);
    });
}

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Modal de visualização ampliada
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImg');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});