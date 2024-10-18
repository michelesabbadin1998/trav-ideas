document.addEventListener('DOMContentLoaded', function () {
    const proposte = document.querySelectorAll('.proposta');

    proposte.forEach(proposta => {
        const dettagli = proposta.querySelector('.proposta-dettagli');
        const freccia = proposta.querySelector('.freccia');

        // Nascondi inizialmente i dettagli
        dettagli.style.display = 'none';

        // Aggiungi l'evento click alla freccia per gestire l'espansione
        freccia.addEventListener('click', (event) => {
            event.stopPropagation(); // Previene il reindirizzamento al clic
            event.preventDefault();  // Previene comportamenti indesiderati sui link

            // Chiudi tutte le altre proposte
            proposte.forEach(p => {
                const otherDetails = p.querySelector('.proposta-dettagli');
                const otherArrow = p.querySelector('.freccia');
                if (otherDetails !== dettagli) {
                    otherDetails.style.display = 'none';  // Nasconde i dettagli delle altre proposte
                    otherArrow.classList.remove('rotated');  // Resetta la freccia
                }
            });

            // Alterna la visibilità dei dettagli della proposta corrente
            if (dettagli.style.display === 'none') {
                dettagli.style.display = 'block';
            } else {
                dettagli.style.display = 'none';
            }

            // Ruota la freccia
            freccia.classList.toggle('rotated');
        });
    });
});

let currentIndexAccommodation = 0;
let currentIndexPhotos = 0;

function showSlide(containerId, index) {
    const container = document.getElementById(containerId);
    const slides = container.querySelectorAll('.slide');
    const totalSlides = slides.length;

    let currentIndex;
    if (containerId === 'accommodation-container') {
        currentIndex = currentIndexAccommodation;
    } else if (containerId === 'photos-container') {
        currentIndex = currentIndexPhotos;
    }

    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    });

    if (containerId === 'accommodation-container') {
        currentIndexAccommodation = currentIndex;
    } else if (containerId === 'photos-container') {
        currentIndexPhotos = currentIndex;
    }
}

function nextSlide(containerId) {
    if (containerId === 'accommodation-container') {
        showSlide(containerId, currentIndexAccommodation + 1);
    } else if (containerId === 'photos-container') {
        showSlide(containerId, currentIndexPhotos + 1);
    }
}

function prevSlide(containerId) {
    if (containerId === 'accommodation-container') {
        showSlide(containerId, currentIndexAccommodation - 1);
    } else if (containerId === 'photos-container') {
        showSlide(containerId, currentIndexPhotos - 1);
    }
}

// Inizializza le slide al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    showSlide('accommodation-container', 0);
    showSlide('photos-container', 0);
});



