const priceKm = 0.21;
const ageUser = document.getElementById('age-user');
const juniorDiscount = 20;
const seniorDiscount = 40;


const buttonCreate = document.getElementById('button-create');
const buttonReset = document.getElementById('button-reset')
const ticketPow = document.querySelector('.ticket-one');

buttonCreate.addEventListener('click', ticketCreation);
buttonReset.addEventListener('click', ticketReset)

let carriage, message, ticketCost, ticketCostVerify;



function ticketCreation(){
  const nameUser = document.getElementById('name-user').value;
  const kmTrip = parseInt(document.getElementById('km-trip').value);
  carriage = Math.ceil(Math.random() * 10);

  let ticketCost = kmTrip * priceKm;

  if (ageUser.value == 3) {
    ticketCost *= 1 - (seniorDiscount / 100);
  } else if (ageUser.value == 1) {
    ticketCost *= 1 - (juniorDiscount / 100);
  }
  
  ticketPow.classList.remove('d-none')
  
  document.getElementById('outputName').innerHTML = nameUser;
  document.getElementById('outputPrice').innerHTML = ticketCost;
  document.getElementById('outputCarriage').innerHTML = carriage;

}


function ticketReset(){
  ticketPow.classList.add('d-none')
}