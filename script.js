document.getElementById('recensioneForm').addEventListener
(
  'submit', function(event) 
{
    event.preventDefault();

    // Ottieni i valori dal modulo
    const nome = document.getElementById('nome').value;
    const messaggio = document.getElementById('messaggio').value;

    // Crea un elemento per la nuova recensione
    const nuovaRecensione = document.createElement('div');
    nuovaRecensione.classList.add('recensione');
    nuovaRecensione.innerHTML = `<h3>${nome}</h3><p>${messaggio}</p>`;

    // Aggiungi la nuova recensione alla sezione delle recensioni
    document.getElementById('recensioni').appendChild(nuovaRecensione);

    // Resetta il modulo
    document.getElementById('recensioneForm').reset();
}
);
