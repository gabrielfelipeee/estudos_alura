const swiper = new Swiper('.swiper', {
    spaceBetween: 10, // espaço entre os livros
    slidesPerView: 3, // Quantidade de livros na tela
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});