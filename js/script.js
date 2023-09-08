const priceKm = 0.21;
const ageUser = document.getElementById('age-user');
const juniorDiscount = 20;
const seniorDiscount = 40;


const buttonCreate = document.getElementById('button-create');

buttonCreate.addEventListener('click', ticketCreation);

function ticketCreation(){
  const nameUser = document.getElementById('name-user').value;
  const kmTrip = parseInt(document.getElementById('km-trip').value);

  let ticketCost = kmTrip * priceKm;

  if (ageUser.value == 3) {
    ticketCost *= 1 - (seniorDiscount / 100);
  } else if (ageUser.value == 1) {
    ticketCost *= 1 - (juniorDiscount / 100);
  }
  
  document.getElementById('outputName').innerHTML = nameUser;
  document.getElementById('outputPrice').innerHTML = ticketCost;
}

let message, ticketCost, ticketCostVerify;

