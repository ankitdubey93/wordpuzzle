const rowLength = 6;
const columnLength = 5;
const guesses = [[], [], [], [], []];

const displayArray = () => {
  console.table(guesses);
}


const keyPressed = (letter) => {
  console.log(letter);
}

const letter = document.addEventListener('keydown', keyPressed);








function addDivWithInput() {


  const container = document.querySelector('.outer-box');


  for (let i = 0; i < rowLength; i++) {
    for (let i = 0; i < columnLength; i++) {

      const newDiv = document.createElement('div');
      newDiv.innerHTML = `${i}`


      newDiv.classList.add('letter-box')


      container.appendChild(newDiv);
    }
  }
}

const typeInput = () => {

}
addDivWithInput();


displayArray();

keyPressed();