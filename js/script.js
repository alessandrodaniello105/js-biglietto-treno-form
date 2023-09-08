const kmTrip = parseInt(document.getElementById('km-trip').value);
const priceKm = 0.21;

const buttonCreate = document.getElementById('button-create');

buttonCreate.addEventListener('click', ticketCreation);

function ticketCreation(){
  const nameUser = document.getElementById('name-user').value;
  
  document.getElementById('outputName').innerHTML = nameUser
}
