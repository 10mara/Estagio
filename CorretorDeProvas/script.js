let index = 0;
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let autoSlide = setInterval(nextSlide, 3000);

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
}

document.getElementById('next').addEventListener('click', function() {
    clearInterval(autoSlide);
    nextSlide();
});

document.getElementById('prev').addEventListener('click', function() {
    clearInterval(autoSlide);
    prevSlide();
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
function verificarScroll() {
    const elementos = document.querySelectorAll(".textprof");

    elementos.forEach(elemento => {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add("show");
        } else {
            elemento.classList.remove("show"); // Remove a classe quando sai da tela
        }
    });
}

window.addEventListener("scroll", verificarScroll);
verificarScroll(); // Executa a função ao carregar a página para verificar se algum elemento já está visível