document.addEventListener('DOMContentLoaded', function () {
let currentIndex = {
    'accommodation-container': 0,
    'photos-container': 0,
    'accommodation-container-2': 0,
    'photos-container-2': 0,
    'accommodation-container-3':0
};

    // Funzione per mostrare la slide corretta
    function showSlide(containerId, index) {
        const container = document.getElementById(containerId);
        const slides = container.querySelectorAll('.slide');
        const totalSlides = slides.length;
        console.log(currentIndex);

         currentIndex[containerId] = index;

    // Ensure the index is within bounds
        if (currentIndex[containerId] < 0) currentIndex[containerId] = totalSlides - 1;
        if (currentIndex[containerId] >= totalSlides) currentIndex[containerId] = 0;

        // Show the correct slide
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - currentIndex[containerId]) * 100}%)`;
        });
    }

    // Funzione per andare alla slide successiva
    function nextSlide(containerId) {
        showSlide(containerId, currentIndex[containerId] + 1);
    }

    // Funzione per andare alla slide precedente
    function prevSlide(containerId) {
        showSlide(containerId, currentIndex[containerId] - 1);
    }

    // Inizializza gli indici correnti per entrambi i contenitori

// Inizializza gli slider per entrambi i set di contenitori
showSlide('accommodation-container', 0);
showSlide('photos-container', 0);
showSlide('accommodation-container-2', 0);
showSlide('photos-container-2', 0);
showSlide('accommodation-container-3', 0);    

// Associa gli eventi ai pulsanti per tutti i contenitori
document.querySelectorAll('#accommodation-container .prev').forEach(button => {
    button.addEventListener('click', function () {
        prevSlide('accommodation-container');
    });
});
document.querySelectorAll('#accommodation-container .next').forEach(button => {
    button.addEventListener('click', function () {
        nextSlide('accommodation-container');
    });
});

// Ripeti per il secondo set
document.querySelectorAll('#accommodation-container-2 .prev').forEach(button => {
    button.addEventListener('click', function () {
        prevSlide('accommodation-container-2');
    });
});
document.querySelectorAll('#accommodation-container-2 .next').forEach(button => {
    button.addEventListener('click', function () {
        nextSlide('accommodation-container-2');
    });
});

// Ripeti per il terzo set
document.querySelectorAll('#accommodation-container-3 .prev').forEach(button => {
    button.addEventListener('click', function () {
        prevSlide('accommodation-container-3');
    });
});
document.querySelectorAll('#accommodation-container-3 .next').forEach(button => {
    button.addEventListener('click', function () {
        nextSlide('accommodation-container-3');
    });
});

// Ripeti per le foto
document.querySelectorAll('#photos-container .prev').forEach(button => {
    button.addEventListener('click', function () {
        prevSlide('photos-container');
    });
});
document.querySelectorAll('#photos-container .next').forEach(button => {
    button.addEventListener('click', function () {
        nextSlide('photos-container');
    });
});

// Ripeti per il secondo set di foto
document.querySelectorAll('#photos-container-2 .prev').forEach(button => {
    button.addEventListener('click', function () {
        prevSlide('photos-container-2');
    });
});
document.querySelectorAll('#photos-container-2 .next').forEach(button => {
    button.addEventListener('click', function () {
        nextSlide('photos-container-2');
    });
});
});






