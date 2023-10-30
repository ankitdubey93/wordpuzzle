

function init() {


  const container = document.querySelector('.outer-box');


  for (let i = 0; i < 6; i++) {
    for (let i = 0; i < 5; i++) {

      const newDiv = document.createElement('div');

      newDiv.classList.add('letter-box')


      container.appendChild(newDiv);
    }
  }

  const guesses = [[], [], [], [], [], []];
  const alphabets = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase();
  let currentRow = 0;
  let guessString = '';
  const wordOfTheDay = 'ANKIT';
  console.log(countLetters(wordOfTheDay));

  const letterBox = document.querySelectorAll('.letter-box');


  function countLetters(str) {
    const letterCount = {};
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (letter in letterCount) {
        letterCount[letter] += 1;
      }
      else {
        letterCount[letter] = 1;
      }
    }
    return letterCount;
  }


  const wordValidate = () => {
    const wordOfTheDayArray = Array.from(wordOfTheDay);
    const wordOfTheDayLetterCount = countLetters(wordOfTheDay);
    guessString = guesses[currentRow].join("");
    const guessArray = Array.from(guessString);
    console.log(countLetters(guessString));
    const guessLetterCount = {};

    if (guessArray.includes(wordOfTheDayArray)) {
      letterBox[currentRow * guesses[currentRow].length + i].classList.add("green");
    }


    // Is this letter in the correct position? - Green
    // If not, is this letter present in the string?
    //    If so, has the user entered the same letter in the string again? - Grey
    //    If not - Yellow












  }


  /**
   * 
   * @param {KeyboardEvent} event 
   */
  const keyPressed = (event) => {
    const letter = event.key.toUpperCase();
    if (!alphabets.includes(letter) && letter != 'ENTER') {
      return;
    }
    if (guesses[currentRow].length < 5) {
      if (letter != 'ENTER') {
        guesses[currentRow].push(letter);


        for (let i = 0; i < letterBox.length; i++) {

          if (letterBox[i].innerHTML.length == 0) {

            letterBox[i].innerHTML = letter;
            break;
          }
        }
      }
    }

    else {
      if (letter === 'ENTER') {
        const guess = guesses[currentRow].join("");
        wordValidate();
        if (guess === wordOfTheDay) {
          alert('you won!');
          document.removeEventListener('keydown', keyPressed);
        }
        if (guess !== wordOfTheDay && currentRow === 5) {
          alert('you lost');
          document.removeEventListener('keydown', keyPressed);
        }
        currentRow++;

      }
    }
  }
  document.addEventListener('keydown', keyPressed);

}

init();
