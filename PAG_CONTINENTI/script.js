function toggleDetails(event) {
    event.stopPropagation(); // Previene il reindirizzamento quando si clicca sulla freccia
    const dettagli = event.target.closest('.proposta').querySelector('.proposta-dettagli');
    dettagli.classList.toggle('active'); // Alterna la visibilità dei dettagli
    
    // Ruota la freccia
    event.target.classList.toggle('rotated');
}
        const proposte = document.querySelectorAll('.proposta');
        proposte.forEach(proposta => {
            proposta.addEventListener('click', (event) => {
                const dettagli = proposta.querySelector('.proposta-dettagli');
                dettagli.classList.toggle('active');
                const freccia = proposta.querySelector('.freccia');
                freccia.classList.toggle('rotated');
            });
            });
