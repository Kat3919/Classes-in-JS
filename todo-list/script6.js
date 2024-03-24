//=====================
// Переменные

let cardArray = [];
let cardArrayBoard1 = [];
let cardArrayBoard2 = [];
let cardArrayBoard3 = [];

const boards = {
  0: cardArrayBoard1,
  1: cardArrayBoard2,
  2: cardArrayBoard3,
};

let activeBoardIndex = -1;

//=====================
// Методы

async function getCards() {
  const response = await fetch(
    "https://65d85342c96fbb24c1bb40ab.mockapi.io/api/pintrest/PinterestClone"
  );

  return await response.json();
}

function getFromLocalStorage() {
  if (localStorage.getItem("cardArray")) {
    cardArray = JSON.parse(localStorage.getItem("cardArray"));
    createCardsGrid(cardArray);
  }
  if (localStorage.getItem("cardArrayBoard1")) {
    boards[0] = cardArrayBoard1 = JSON.parse(
      localStorage.getItem("cardArrayBoard1")
    );
  }
  if (localStorage.getItem("cardArrayBoard2")) {
    boards[1] = cardArrayBoard2 = JSON.parse(
      localStorage.getItem("cardArrayBoard2")
    );
  }
  if (localStorage.getItem("cardArrayBoard3")) {
    boards[2] = cardArrayBoard3 = JSON.parse(
      localStorage.getItem("cardArrayBoard3")
    );
  }
}

function setToLocalStorage(array, name) {
  localStorage.setItem(name, JSON.stringify(array));
}

// Создает элемент с указанными свойствами
function createElement({ tag, className, place, text, attribute }) {
  const someElem = document.createElement(tag);
  className.forEach((element) => {
    someElem.classList.add(element);
  });
  if (text) {
    someElem.innerText = text;
  }
  if (attribute) {
    for (key in attribute) {
      someElem.setAttribute(`${key}`, `${attribute[key]}`);
    }
  }

  place.append(someElem);
  return someElem;
}

//=================================
// Заголовок страницы

function searchByLetters(searchTerm, cards) {
  return cards.filter((card) =>
    card.hashtag.toLowerCase().includes(searchTerm)
  );
}

function updateSearchResults(results) {
  // console.log("Обновление отображения результатов: ", results);
  let main = document.querySelector("main");
  main.remove();
  createCardsGrid(results);
}

// Создает строку поиска
function createSearchBar(parent) {
  const inputNav = createElement({
    tag: "input",
    className: ["navigation__input"],
    text: undefined,
    attribute: {
      type: "search",
      placeholder: "Поиск...",
    },
    place: parent,
  });

  inputNav.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();

    // поиск и отображение результатов
    const board = activeBoardIndex != -1 ? boards[activeBoardIndex] : cardArray;
    const searchResults = searchByLetters(searchTerm, board);
    updateSearchResults(searchResults);
  });
}

// Создает элементы выпадающего списка досок
function createBoardsDropdownOptions(dropdown) {
  const nameBoards = ["Доска 1", "Доска 2", "Доска 3"];

  for (let j = 0; j < nameBoards.length; j++) {
    const linkBoard = createElement({
      tag: "a",
      className: ["Boards__item"],
      text: nameBoards[j],
      place: dropdown,
    });

    linkBoard.addEventListener("click", function (event) {
      console.log("Выбрана доска:", nameBoards[j]);
      let main = document.querySelector("main");
      main.innerHTML = "";

      activeBoardIndex = j;
      createCardsGrid(boards[j]);
    });
  }
}

// Создает выпадающие список досок
function createBoardsDropdown(parent) {
  const dropdownMenu = createElement({
    tag: "div",
    className: ["Boards__menu"],
    place: parent,
  });

  createBoardsDropdownOptions(dropdownMenu);

  return dropdownMenu;
}

// Создает заголовок страницы
function createHeader() {
  const header = createElement({
    tag: "header",
    className: ["header"],
    place: root,
  });

  const headerContainer = createElement({
    tag: "div",
    className: ["header__container"],
    place: header,
  });

  const navBlock = createElement({
    tag: "nav",
    className: ["navigation"],
    place: headerContainer,
  });

  const linkNav = createElement({
    tag: "div",
    className: ["link__nav"],
    place: navBlock,
  });
  const linkNavSpan = createElement({
    tag: "span",
    className: ["link__nav-text"],
    text: "Pinterest",
    place: linkNav,
  });
  // Банер страницы
  const imgLink = createElement({
    tag: "img",
    className: ["link__img"],
    attribute: {
      src: "https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",
      alt: "Pinterest logo",
    },
    place: linkNav,
  });

  // при загружает  сетку с главной страницы
  imgLink.addEventListener("click", function () {
    activeBoardIndex = -1;
    createCardsGrid(cardArray);
  });

  const divInput = createElement({
    tag: "div",
    className: ["div__input-icon"],
    place: navBlock,
  });

  createSearchBar(divInput);

  const divButton = createElement({
    tag: "div",
    className: ["div__button"],
    place: divInput,
  });
  const buttonBoards = createElement({
    tag: "a",
    attribute: { href: "#" },
    className: ["button-boards"],
    place: divButton,
  });
  //при клике одновременно срабатывает бургер "Х" и выпадает меню досок
  //и при клике на любую из досок модальное окно закрывается и бургер
  //возвращается в исходное положение
  buttonBoards.addEventListener("click", () => {
    const dropdownMenu = divButton.querySelector(".Boards__menu");
    dropdownMenu.classList.toggle("active");
    buttonBoards.classList.toggle("active-burger");

    if (dropdownMenu.classList.contains("active")) {
      const allBoardsItems = dropdownMenu.querySelectorAll(".Boards__item");
      allBoardsItems.forEach((item) => {
        item.addEventListener("click", () => {
          dropdownMenu.classList.remove("active");
          buttonBoards.classList.remove("active-burger");
        });
      });
    }
  });

  const spanButton = createElement({
    tag: "span",
    className: ["button-boards_span"],
    text: "Выбрать доску",
    place: buttonBoards,
  });

  createBoardsDropdown(divButton);
}

//   Добавляет карточку на выбранную доску

function addCardToBoard(cardData, boardIndex) {
  switch (boardIndex) {
    case 0:
      cardArrayBoard1.push(cardData);
      setToLocalStorage(cardArray, "cardArray");
      setToLocalStorage(cardArrayBoard1, "cardArrayBoard1");
      break;
    case 1:
      cardArrayBoard2.push(cardData);
      setToLocalStorage(cardArray, "cardArray");
      setToLocalStorage(cardArrayBoard2, "cardArrayBoard2");
      break;
    case 2:
      cardArrayBoard3.push(cardData);
      setToLocalStorage(cardArray, "cardArray");
      setToLocalStorage(cardArrayBoard3, "cardArrayBoard3");
      break;
  }
  //------- Для проверки добавления. Потом надо убрать ------
  console.log(`Добавление карты на доску ${boardIndex}:`, cardData);
}

//-----  Создает список доступных досок ------

function createBoardsOptions(parent, cardData, nameBoards) {
  for (let j = 0; j < nameBoards.length; j++) {
    const linkBoard = createElement({
      tag: "a",
      className: ["list__item"],
      attribute: { href: "#" },
      text: nameBoards[j],
      place: parent,
    });

    linkBoard.addEventListener("click", function () {
      const index = cardArray.findIndex((item) => item.id === cardData.id);
      if (index !== -1) {
        cardArray.splice(index, 1);
        addCardToBoard(cardData, j);
      }
      cardData.view.remove();
      cardData.view = null;
    });
  }
}
//-------- Создаем кнопку для меню карточки -------
function createPinMenuButton(parent, buttonText, id) {
  const button = createElement({
    tag: "button",
    className: ["pin-menu__button"],
    attribute: {
      id: [id],
    },
    place: parent,
    text: buttonText,
  });

  return button;
}

//----------- Создает меню карточки ------------
function createPinMenu(cardData, parent) {
  const pinMenu = createElement({
    tag: "div",
    className: ["pin-menu"],
    place: parent,
  });

  const buttonAdd = createPinMenuButton(
    pinMenu,
    "Добавить на доску",
    "button-add"
  );
  const buttonComplain = createPinMenuButton(
    pinMenu,
    "Пожаловаться",
    "button-complain"
  );

  //--------- Открытие окна добавления карточки ---------
  buttonAdd.addEventListener("click", () => {
    createModalAdd(pinMenu, cardData);
  });

  //----------- Открытие окна жалоб -----------
  buttonComplain.addEventListener("click", () => {
    createComplaintWindow(pinMenu);
  });

  return pinMenu;
}
// Окно добавления на доску

//-------- Создает модальное окно для добавления карточки на доску

function createModalAdd(parent, cardData) {
  const modalAdd = document.createElement("div");
  modalAdd.className = "modal-add";
  parent.append(modalAdd);

  const modalAddContainer = createElement({
    tag: "div",
    className: ["modal-add__container"],
    place: modalAdd,
  });

  const modalAddBoards = createElement({
    teg: "div",
    className: ["modal-add__boards"],
    place: modalAddContainer,
  });

  const modalAddTitle = createElement({
    tag: "div",
    className: ["modal-add__title"],
    text: "Добавить на доску",
    place: modalAddBoards,
  });

  //доски с оберткой
  const modalAddList = createElement({
    tag: "div",
    className: ["modal-add__list"],
    place: modalAddBoards,
  });

  createBoardsOptions(modalAddList, cardData, [
    "Доска 1",
    "Доска 2",
    "Доска 3",
  ]);

  const modalAddFooter = createElement({
    tag: "div",
    className: ["modal-add__footer"],
    place: modalAddBoards,
  });

  const modalAddClose = createElement({
    tag: "button",
    className: ["modal-add__close"],
    text: "Закрыть",
    place: modalAddFooter,
  });

  //Закрытие и удаление модального окна "Добавить на доску"
  modalAddClose.addEventListener("click", () => {
    modalAdd.remove();
  });
}

//Модальное окно пожаловаться

// Создает окно жалобы
function createComplaintWindow(parent) {
  const rootDiv = document.createElement("div");
  rootDiv.className = "modal";
  parent.append(rootDiv);

  const body = createElement({
    tag: "div",
    className: ["modal_body"],
    place: rootDiv,
  });

  const content = createElement({
    teg: "div",
    className: ["modal_content"],
    place: body,
  });

  const title = createElement({
    tag: "div",
    className: ["modal_title"],
    text: "Жалоба на пин",
    place: content,
  });

  //чекбоксы с оберткой
  const text = createElement({
    tag: "div",
    className: ["modal_text"],
    place: content,
  });

  const arrText = [
    "Спам",
    "Членовредительство",
    "Ложная информация",
    "Агрессивные действия",
    "Опасные товары",
    "Преследование или критика",
    "Сцены насилия",
    "Нарушение конфиденциальности",
  ];
  for (let i = 0; i <= arrText.length - 1; i++) {
    const label = createElement({
      tag: "label",
      className: ["modal_label"],
      text: arrText[i],
      place: text,
    });

    createElement({
      tag: "input",
      className: ["modal_checkbox"],
      attribute: {
        type: "checkbox",
      },
      place: label,
    });

    createElement({
      tag: "span",
      className: ["modal_span"],
      place: label,
    });
  }

  const footer = createElement({
    tag: "div",
    className: ["modal_footer"],
    place: content,
  });

  const buttonClose = createElement({
    tag: "button",
    className: ["modal_close"],
    text: "Отмена",
    place: footer,
  });

  const buttonSubmit = createElement({
    tag: "button",
    className: ["modal_submit"],
    text: "Отправить",
    place: footer,
  });
  const buttonSubmitSpinner = createElement({
    tag: "span",
    className: ["spinner"],
    place: buttonSubmit,
  });

  // При нажатии на кнопку "отмена", закрыть и удалить модальное окно
  buttonClose.addEventListener("click", () => {
    rootDiv.remove();
  });

  // При нажатии на кнопку"отправить",срабатывает спиннер +
  // закрывается модальное окно + срабатывает alert для экранов >=1024
  buttonSubmit.addEventListener("click", () => {
    buttonSubmit.style.display = "block";
    buttonSubmitSpinner.style.display = "flex";
    buttonSubmitSpinner.classList.add("spin");
    setTimeout(() => {
      buttonSubmitSpinner.style.display = "none";
      rootDiv.remove();

      setTimeout(() => {
        if (window.innerWidth >= 1024) {
          alert("Ваша жалоба отправлена!");
        }
      }, 700);
    }, 1500);
  });

  //Окраска текста при клике на чекбокс
  const selectors = rootDiv.querySelectorAll(".modal_label");
  for (const selector of selectors) {
    selector.addEventListener("click", (e) => {
      const container = e.currentTarget;
      if (container.firstElementChild.checked) {
        container.style.color = "red";
      } else {
        container.style.color = "black";
      }
    });
  }
}

//===========================
// Область карточек
// Создает сетку карточек
function createCardsGrid(cards) {
  const oldMain = document.querySelector("main");
  if (oldMain) {
    oldMain.remove();
  }
  const main = createElement({
    tag: "main",
    className: ["main"],
    place: root,
  });
  const mainContainer = createElement({
    tag: "div",
    className: ["main__container"],
    place: main,
  });
  // Создает элемент карточки
  function createCard(cardData, parent) {
    const cardContainer = createElement({
      tag: "div",
      className: ["card"],
      place: parent,
    });
    //карточки с рандомной высотой
    const possibleHeights = [200, 260, 280, 300, 240];
    const randomHeight =
      possibleHeights[Math.floor(Math.random() * possibleHeights.length)];

    const pictureElement = createElement({
      tag: "img",
      className: ["card-picture"],
      attribute: {
        src: cardData.picture + "?random=" + cardData.id,
        height: randomHeight + "px",
        width: "640px",
      },
      place: cardContainer,
    });

    const cardContent = createElement({
      tag: "div",
      className: ["card-content"],
      place: cardContainer,
    });

    const avatarElement = createElement({
      tag: "img",
      className: ["card-avatar"],
      attribute: { src: cardData.avatar },
      place: cardContent,
    });
    const hashtagElement = createElement({
      tag: "div",
      className: ["card-hashtag"],
      text: `#${cardData.hashtag}`,
      place: cardContent,
    });
    return cardContainer;
  }
  cards.forEach((cardData) => {
    const card = createCard(cardData, mainContainer);
    cardData.view = card;

    // Меню карточки
    const cardPinMenu = createPinMenu(cardData, card);

    card.addEventListener("mouseover", function () {
      cardPinMenu.style.display = "flex";
    });

    card.addEventListener("mouseout", function () {
      cardPinMenu.style.display = "none";
    });
  });
}

//===========================

createHeader();
getFromLocalStorage();

if (cardArray.length == 0) {
  getCards().then((cards) => {
    createCardsGrid(cards);
    setToLocalStorage(cards, "cardArray");
    cardArray = cards;
  });
}
