window.onload = function() {
    let index = 0;
    const images = document.querySelectorAll('.carousel img');
    const dots = document.querySelectorAll('.carousel .dots span');

    function updateCarousel() {
        images.forEach((img, i) => {
            img.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                img.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    document.querySelector('.carousel .prev').addEventListener('click', () => {
        index = index > 0 ? index - 1 : images.length - 1;
        updateCarousel();
    });

    document.querySelector('.carousel .next').addEventListener('click', () => {
        index = index < images.length - 1 ? index + 1 : 0;
        updateCarousel();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });

    updateCarousel();
}
