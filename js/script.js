const priceKm = 0.21;
const ageUser = document.getElementById('age-user');
const juniorDiscount = 20;
const seniorDiscount = 40;

//BUTTONS
const buttonCreate = document.getElementById('button-create');
const buttonReset = document.getElementById('button-reset');

buttonCreate.addEventListener('click', ticketCreation);
buttonReset.addEventListener('click', ticketReset);

//OUTPUT
const outputName = document.getElementById('outputName');
const outputPrice = document.getElementById('outputPrice');
const outputCarriage = document.getElementById('outputCarriage');
const outputNumberTicket = document.getElementById('outputNumberTicket');
const outputOfferta = document.getElementById('outputOfferta');


const ticketPow = document.querySelector('.ticket-one');

let carriage, ticketCost, ticketCostVerify;


function ticketCreation(){

  const nameUser = document.getElementById('name-user').value;
  const kmTrip = parseFloat(document.getElementById('km-trip').value);

  carriage = Math.ceil(Math.random() * 10); //random carriage generator
  numberTicket = Math.ceil(Math.random() * 10000) + 90000; // random ticket number generator

  let ticketCost = kmTrip * priceKm;
  let offerta = 'Biglietto Standard';

  if (ageUser.value == 3) {

    offerta = 'Sconto Over65';
    ticketCost *= 1 - (seniorDiscount / 100);

  } else if (ageUser.value == 1) {

    offerta = 'Sconto Minorenni';
    ticketCost *= 1 - (juniorDiscount / 100);

  }
  
  ticketPow.classList.remove('d-none');
  
  outputName.innerHTML = nameUser;
  outputPrice.innerHTML = ticketCost.toFixed(2) + ' €';
  outputCarriage.innerHTML = carriage;
  outputNumberTicket.innerHTML = numberTicket;
  outputOfferta.innerHTML = offerta;

  document.getElementById('buy-btn').innerHTML = `
  <button class="btn btn-info">Acquista Biglietto</button>
  `;

}


function ticketReset(){
  ticketPow.classList.add('d-none');
}