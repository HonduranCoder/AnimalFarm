const h1El = document.getElementById('animal-name');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

console.log(
    h1El,
    horseEl,
    dogEl,
    catEl,
    horseSound,
    dogSound,
    catSound,
);
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
horseEl.addEventListener('click', () => {
    alert('horse click!');
});

dogEl.addEventListener('click', () => {
    alert('dog click!');
});

catEl.addEventListener('click', () => {
  alert('cat click!');
});

horseEl.addEventListener('click', () => {
  horseSound.play();
});

dogEl.addEventListener('click', () => {
  dogSound.play();
});


catEl.addEventListener('click', () => {
  catSound.play();
});


/*
Started to attempt the keydown event listener 

document.addEventListener('keydown', logKey);

function logKey(h) {
  horse.textContent += ` ${e.code}`;
}
document.addEventListener('keydown', logKey);

function logKey(d) {
  dog.textContent += ` ${e.code}`;
}

document.addEventListener('keydown', logKey);

function logKey(c) {
  cat.textContent += ` ${e.code}`;
}*/
