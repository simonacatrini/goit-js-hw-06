// Se selectează elementul span#value care va afișa valoarea contorului
const valueSpan = document.getElementById("value");

// Se selectează butoanele de incrementare și decrementare
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");

// Variabila care va stoca valoarea curentă a contorului
let counterValue = 0;

// Funcția pentru actualizarea valorii și afișarea ei
function updateValue() {
  valueSpan.textContent = counterValue;
}

// Click handler pentru butonul de incrementare
incrementButton.addEventListener("click", function() {
  counterValue++;
  updateValue();
});

// Click handler pentru butonul de decrementare
decrementButton.addEventListener("click", function() {
  counterValue--;
  updateValue();
});

// Inițializarea valorii contorului la început
updateValue();
