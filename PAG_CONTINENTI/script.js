document.addEventListener('DOMContentLoaded', function () {
    const proposte = document.querySelectorAll('.proposta');

    proposte.forEach(proposta => {
        const dettagli = proposta.querySelector('.proposta-dettagli');

        // Assicurati che i dettagli siano chiusi all'inizio
        dettagli.classList.remove('active');

        proposta.addEventListener('click', (event) => {
            // Chiudi tutti gli altri dettagli
            proposte.forEach(p => {
                const otherDetails = p.querySelector('.proposta-dettagli');
                if (otherDetails !== dettagli) {
                    otherDetails.classList.remove('active');
                    p.querySelector('.freccia').classList.remove('rotated');
                }
            });

            // Alterna la visibilità dei dettagli e ruota la freccia
            dettagli.classList.toggle('active');
            proposta.querySelector('.freccia').classList.toggle('rotated');
        });
    });
});

