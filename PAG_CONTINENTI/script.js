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
    const sliders = [
        'accommodation-container',
        'photos-container',
        'accommodation-container-2',
        'photos-container-2'
    ];

    sliders.forEach(containerId => {
        const slides = document.querySelectorAll(`#${containerId} .slide`); // Seleziona tutte le slide
        const totalSlides = slides.length; // Conta il numero totale di slide
        let currentIndex = 0; // Indice attuale della slide

        // Seleziona i pulsanti "next" e "prev"
        const nextButton = document.querySelector(`#${containerId} .next`);
        const prevButton = document.querySelector(`#${containerId} .prev`);

        // Aggiungi l'evento di clic per il pulsante "next"
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides; // Incrementa l'indice e torna a zero se supera il totale
            updateSliderPosition(containerId); // Aggiorna la posizione dello slider
        });

        // Aggiungi l'evento di clic per il pulsante "prev"
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrementa l'indice e torna all'ultima slide se scende sotto zero
            updateSliderPosition(containerId); // Aggiorna la posizione dello slider
        });

        // Funzione per aggiornare la posizione dello slider
        function updateSliderPosition(containerId) {
            const slider = document.querySelector(`#${containerId} .slider`); // Seleziona il contenitore dello slider
            const slideWidth = slides[0].clientWidth; // Ottiene la larghezza della prima slide
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Calcola la traslazione in base all'indice attuale
        }

        // Inizializza la posizione dello slider
        updateSliderPosition(containerId);
    });
});


