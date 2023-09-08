const priceKm = 0.21;

const buttonCreate = document.getElementById('button-create');

buttonCreate.addEventListener('click', ticketCreation);

function ticketCreation(){
  const nameUser = document.getElementById('name-user').value;
  const kmTrip = parseInt(document.getElementById('km-trip').value);

  ticketCost = priceKm * kmTrip;
  
  document.getElementById('outputName').innerHTML = nameUser;
  document.getElementById('outputPrice').innerHTML = ticketCost;
}

let message, ticketCost;

