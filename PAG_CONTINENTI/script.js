document.addEventListener('DOMContentLoaded', function () {
    const proposte = document.querySelectorAll('.proposta');

    proposte.forEach(proposta => {
        const dettagli = proposta.querySelector('.proposta-dettagli');
        const freccia = proposta.querySelector('.freccia');

        // Assicurati che i dettagli siano chiusi all'inizio
        dettagli.classList.remove('active');

        // Aggiungi l'evento click alla freccia
        freccia.addEventListener('click', (event) => {
            event.stopPropagation(); // Previene il reindirizzamento al clic

            // Chiudi tutti gli altri dettagli
            proposte.forEach(p => {
                const otherDetails = p.querySelector('.proposta-dettagli');
                const otherArrow = p.querySelector('.freccia');
                if (otherDetails !== dettagli) {
                    otherDetails.classList.remove('active');
                    otherArrow.classList.remove('rotated');
                }
            });

            // Alterna la visibilità dei dettagli e ruota la freccia
            dettagli.classList.toggle('active');
            freccia.classList.toggle('rotated');
        });
    });
});


