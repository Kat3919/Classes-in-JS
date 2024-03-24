const root = document.querySelector("#root"); //метод,возвращающий 1 элемент
let cardArreyBasic = [];

function getDate() {
  if (localStorage.getItem("todos")) {
    cardArreyBasic = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < cardArreyBasic.length; i++) {
      creatCard(cardArreyBasic[i]);
    }
  } else {
    cardArreyBasic = [];
  }
}

function createBasicForm() {
  //создаем ф-ю для основной формы
  const formBasic = document.createElement("form"); // создаем новый элемент form в форме
  formBasic.classList.add("formBasic"); //создаем класс basicForm
  root.append(formBasic); //вставляем в root основную форму с классом basicForm

  const inputBasic = document.createElement("input"); // создаем новый элемент input в форме
  inputBasic.type = "text";
  inputBasic.setAttribute("placeholder", "Enter todo..."); //вставляем placeholder в input
  inputBasic.classList.add("inputBasic"); //создаем класс basicInput
  formBasic.append(inputBasic); //вставляем в форму input с классом inputBasic

  const buttonBasic = document.createElement("button"); // создаем новый элемент кнопку в форме
  buttonBasic.type = "button";
  buttonBasic.textContent = "Add"; //добавляем название кнопки
  buttonBasic.classList.add("buttonBasic"); //создаем класс buttonBasic
  formBasic.append(buttonBasic); //вставляем в форму кнопку с классом buttonBasic

  buttonBasic.addEventListener("click", function () {
    let dateNow = new Date();
    let formattеdDate = String(dateNow).slice(4, 21);

    let todoObject = {
      id: Date.now(),
      date: formattеdDate,
      text: inputBasic.value,
      isChecked: false,
    };
    inputBasic.value = "";
    createNewCard(todoObject);
    cardArreyBasic.push(todoObject);
    setDate();
  });

  const deleteAllButton = document.createElement("button"); // создаем новый элемент кнопку в форме
  deleteAllButton.type = "button";
  deleteAllButton.textContent = "Dellete All"; //добавляем название кнопки
  deleteAllButton.classList.add("delleteAllButton"); //создаем класс delleteAllButton
  formBasic.prepend(deleteAllButton); //вставляем в форму кнопку с классом delleteAllButton

  deleteAllButton.addEventListener("click", function () {
    container.innerHTML = "";
    cardArreyBasic = [];
    setDate();
  });

  const container = document.createElement("div");
  container.classList.add("container");
  root.append(container);
}
createBasicForm();
getDate();

function createNewCard(object) {
  const createCard = document.createElement("div");
  createCard.classList.add("createCard");
  const container = document.querySelector(".container");
  container.append(createCard);

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  if (object.isChecked) {
    checkbox.checked = true;
  }
  createCard.append(checkbox);

  const inputText = document.createElement("div");
  inputText.classList.add("inputText");
  inputText.textContent = object.text;
  createCard.append(inputText);

  const twoContainer = document.createElement("div");
  twoContainer.classList.add("twoContainer");
  createCard.append(twoContainer);

  const date = document.createElement("div");
  date.classList.add("date");
  date.textContent = object.date;
  twoContainer.append(date); //

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.type = "button";
  deleteButton.textContent = "X";
  twoContainer.prepend(deleteButton); //

  updateTodoStyle(inputText, object.isChecked);

  checkbox.addEventListener("change", function () {
    object.isChecked = checkbox.checked;
    updateTodoStyle(inputText, object.isChecked);
    setDate();
  });

  deleteButton.addEventListener("click", function () {
    createCard.remove();
    cardArreyBasic = cardArreyBasic.filter((todo) => todo !== object);
    setDate();
  });
}
function updateTodoStyle(inputText, isChecked) {
  if (isChecked) {
    (inputText.style.textDecoration = "line-through"), //зачеркиваем текст в inputText
      (inputText.style.backgroundColor = "gray"); //а также изменяем цвет самой катрочки
  } else {
    (inputText.style.textDecoration = "none"),
      (inputText.style.backgroundColor = "rgb(245, 244, 244)");
  }
}
function setDate() {
  localStorage.setItem("todos", JSON.stringify(cardArreyBasic));
}
