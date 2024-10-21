document.addEventListener('DOMContentLoaded', function () {
    // Sezione delle proposte con dettagli espandibili
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
            dettagli.style.display = dettagli.style.display === 'none' ? 'block' : 'none';

            // Ruota la freccia
            freccia.classList.toggle('rotated');
        });
    });

    // Sezione Slider
    const sliders = [
        { container: 'accommodation-container' },
        { container: 'photos-container' },
        { container: 'accommodation-container-2' },
        { container: 'photos-container-2' },
        { container: 'accommodation-container-3' }
    ];

    sliders.forEach(({ container }) => {
        const slider = document.querySelector(`#${container} .slider`);
        const slides = document.querySelectorAll(`#${container} .slide`);
        const prevBtn = document.querySelector(`#${container} .prev`);
        const nextBtn = document.querySelector(`#${container} .next`);
        const dots = document.querySelectorAll(`#${container} .dot`);
        const sliderContainer = document.querySelector(`#${container} .slider-container`);

        let currentIndex = 0;
        let autoSlideInterval;

        // Funzione per aggiornare i puntini attivi
        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Funzione per mostrare una specifica slide in base all'indice
        function showSlides(index) {
            if (index >= slides.length) {
                currentIndex = 0; // Torna alla prima slide se si raggiunge la fine
            } else if (index < 0) {
                currentIndex = slides.length - 1; // Torna all'ultima slide se si va all'indietro
            } else {
                currentIndex = index;
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }

        // Funzione per la slide successiva
        function nextSlide() {
            showSlides(currentIndex + 1);
        }

        // Funzione per la slide precedente
        function prevSlide() {
            showSlides(currentIndex - 1);
        }

        // Avvia la rotazione automatica delle slide
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 4000);
        }

        // Ferma la rotazione automatica
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Aggiungi listener ai puntini per la navigazione diretta delle slide
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlides(parseInt(dot.dataset.index));
                startAutoSlide();
            });
        });

        // Aggiungi listener ai bottoni di navigazione
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Ferma la rotazione automatica al passaggio del mouse sul container
        sliderContainer.addEventListener('mouseover', stopAutoSlide);

        // Riprendi la rotazione automatica quando il mouse esce dal container
        sliderContainer.addEventListener('mouseout', startAutoSlide);

        // Inizia la rotazione automatica e aggiorna i puntini all'inizio
        startAutoSlide();
        updateDots();
    });
});
