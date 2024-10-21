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

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = {
        'accommodation-container': 0,
        'photos-container': 0,
        'accommodation-container-2': 0,
        'photos-container-2': 0,
        'accommodation-container-3': 0
    };

    // Funzione per mostrare la slide corretta usando l'opacità
    function showSlide(containerId, index) {
        const container = document.getElementById(containerId);
        const slides = container.querySelectorAll('.slide');
        const totalSlides = slides.length;

        // Correggi l'indice in base ai limiti del numero di slide
        currentIndex[containerId] = (index + totalSlides) % totalSlides;

        // Imposta l'opacità delle slide
        slides.forEach((slide, i) => {
            if (i === currentIndex[containerId]) {
                slide.style.opacity = 1;  // Mostra la slide corrente
            } else {
                slide.style.opacity = 0;  // Nasconde le altre slide
            }
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

    // Inizializza gli slider per tutti i contenitori
    ['accommodation-container', 'photos-container', 'accommodation-container-2', 'photos-container-2', 'accommodation-container-3'].forEach(containerId => {
        showSlide(containerId, 0);  // Mostra la prima slide

        // Associa gli eventi ai pulsanti "prev" e "next"
        document.querySelectorAll(`#${containerId} .prev`).forEach(button => {
            button.addEventListener('click', function () {
                prevSlide(containerId);
            });
        });
        document.querySelectorAll(`#${containerId} .next`).forEach(button => {
            button.addEventListener('click', function () {
                nextSlide(containerId);
            });
        });
    });
});

