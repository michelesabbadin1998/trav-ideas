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



