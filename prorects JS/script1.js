document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const h1Element = document.createElement("h1");
  h1Element.textContent = "Угадай слово";
  h1Element.classList.add("main-title");
  card.append(h1Element);

  const pElement = document.createElement("p");
  pElement.textContent = "Какой язык программирования зашифрован?";
  card.append(pElement);

  const textareaElement = document.createElement("textarea");
  textareaElement.setAttribute("cols", 14);
  textareaElement.id = "displayWord";
  card.append(textareaElement);

  const pElementTwo = document.createElement("p");
  pElementTwo.textContent = "Угадай одну букву: ";
  pElementTwo.classList.add("main-text");
  card.append(pElementTwo);

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.setAttribute("maxlength", "1");
  inputElement.classList.add("letter-input");
  pElementTwo.append(inputElement);

  const buttonElement = document.createElement("button"); //создали кнопку
  buttonElement.textContent = "Проверить"; //тект кнопки
  buttonElement.classList.add("main-button"); //класс кнопки
  buttonElement.type = "button";
  card.append(buttonElement);

  const words = [
    "java",
    "python",
    "javascript",
    "typescript",
    "swift",
    "pascal",
    "ruby",
  ];
  let randomIndex = Math.round(Math.random() * words.length);
  let selectedWord = words[randomIndex];

  let guessedList = [];
  let displayWord = "";
  for (let a = 0; a < selectedWord.length; a++) {
    displayWord += "_ ";
  }

  document.getElementById("displayWord").textContent = displayWord;

  function guessedLetter() {
    let inputElement = document.querySelector(".letter-input");
    if (!inputElement.value) {
      alert("Введите букву.");
      return;
    }

    let letter = inputElement.value.toLowerCase();
    inputElement.value = "";
    if (guessedList.includes(letter)) {
      alert("Вы уже угадали эту букву.");
      return;
    }
    guessedList.push(letter);

    if (!selectedWord.includes(letter)) {
      alert("Этой буквы нет в слове.");
      return;
    }

    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let a = 0; a < selectedWord.length; a++) {
      if (guessedList.includes(selectedWord[a])) {
        updatedDisplay += selectedWord[a] + " ";
      } else {
        updatedDisplay += "_ ";
        allLettersGuessed = false;
      }
    }
    document.getElementById("displayWord").textContent = updatedDisplay;
    if (allLettersGuessed) {
      alert("Вы правильно угадали слово!!!");

      setTimeout(() => {
        textareaElement.value = "";
      }, 2000); // угаданное слово автоматически удаляется через 2 сек
    }
  }
  buttonElement.addEventListener("click", function () {
    guessedLetter(displayWord);
  });
});
