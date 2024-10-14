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
document.getElementById('commentoForm').addEventListener
  (
    'submit', function(event) 
   {
    event.preventDefault();

    // Ottieni i valori dal modulo
    const nomeCommento = document.getElementById('nomeCommento').value;
    const messaggioCommento = document.getElementById('messaggioCommento').value;

    // Crea un elemento per il nuovo commento
    const nuovoCommento = document.createElement('div');
    nuovoCommento.classList.add('commento');
    nuovoCommento.innerHTML = `<h3>${nomeCommento}</h3><p>${messaggioCommento}</p>`;

    // Aggiungi il nuovo commento alla sezione delle discussioni
    document.getElementById('commenti').appendChild(nuovoCommento);

    // Resetta il modulo
    document.getElementById('commentoForm').reset();
  }
);
