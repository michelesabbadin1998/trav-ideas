// script.js
function toggleDetails(event) {
    event.stopPropagation(); // Previene che il click attivi anche il redirect
    const dettagli = event.target.closest('.proposta').querySelector('.proposta-dettagli');
    dettagli.classList.toggle('active');
    
    // Ruota la freccia
    event.target.classList.toggle('rotated');
}
