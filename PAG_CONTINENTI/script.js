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
    // Inizializza gli indici correnti
    let currentIndex = {
        'accommodation-container': 0,
        'photos-container': 0
    };

    // Funzione per mostrare la slide corretta
    function showSlide(containerId, index) {
        const container = document.getElementById(containerId);
        const slides = container.querySelectorAll('.slide');
        const totalSlides = slides.length;

        // Aggiorna l'indice corrente
        if (index >= totalSlides) currentIndex[containerId] = 0;
        else if (index < 0) currentIndex[containerId] = totalSlides - 1;
        else currentIndex[containerId] = index;

        // Mostra le slide corrette
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

    // Inizializza gli slider
    showSlide('accommodation-container', 0);
    showSlide('photos-container', 0);

    // Collega i pulsanti alle funzioni
    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => {
            const containerId = button.parentElement.id; // Ottiene l'ID del contenitore
            prevSlide(containerId);
        });
    });

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            const containerId = button.parentElement.id; // Ottiene l'ID del contenitore
            nextSlide(containerId);
        });
    });
});

