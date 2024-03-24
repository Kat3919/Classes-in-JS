const root = document.querySelector("#root");
// const todos = [];

// function createElement

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

// main
const main = createElement({
  tag: "main",
  className: ["main"],
  place: root,
});

// main - container
const mainContainer = createElement({
  tag: "div",
  className: ["main-container"],
  place: main,
});

// header - function
function createHeader() {
  //data
  const date = new Date();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const dateNow = `${date.getDate()}.${month}.${date.getFullYear()}`; // 20.02.24 делаем месяц двойным числом
  //   const dateNow = `${date.getDate()}.${
  //     date.getMonth() + 1
  //   }.${date.getFullYear()}`; // 20.2.24

  // element
  const navBlock = createElement({
    tag: "nav",
    className: ["navigation"],
    place: mainContainer,
  });

  const buttonDeleteAll = createElement({
    tag: "button",
    className: ["navigation_button"],
    text: "Delete All",
    place: navBlock,
  });

  const buttonDeleteLast = createElement({
    tag: "button",
    className: ["navigation_button"],
    text: "Delete Last",
    place: navBlock,
  });

  const inputSearch = createElement({
    tag: "input",
    className: ["navigation_input"],
    text: undefined,
    attribute: { type: "search", placeholder: "Enter todo" },
    place: navBlock,
  });

  const buttonAdd = createElement({
    tag: "button",
    className: ["navigation_button"],
    text: "Add",
    place: navBlock,
  });

  const navBlockAdditional = createElement({
    tag: "nav",
    className: ["navigation"],
    place: mainContainer,
  });

  const recordCounter = createElement({
    tag: "h2",
    className: ["navigation_counter"],
    place: navBlockAdditional,
    text: "All:2",
  });

  const recordCompleted = createElement({
    tag: "h2",
    className: ["navigation_counter"],
    place: navBlockAdditional,
    text: "Completed : 1",
  });

  const buttonShowAll = createElement({
    tag: "button",
    className: ["navigation_button"],
    place: navBlockAdditional,
    text: "Show All",
  });

  const buttonShowCompleted = createElement({
    tag: "button",
    className: ["navigation_button", "navigation_button_font"],
    place: navBlockAdditional,
    text: "Show Completed",
  });

  const inputSearchRecord = createElement({
    tag: "input",
    className: ["navigation_search-record"],
    place: navBlockAdditional,
    text: undefined,
    attribute: { placeholder: "Search" },
  });

  // click
  const addInput = buttonAdd.addEventListener("click", () => {
    // if (inputSearch.value.trim() !== "") {
    //   //по клику создаем объект
    //   let objTodo = {
    //     id: Date.now(),
    //     date: dateNow,
    //     text: valueRecord,
    //     isChecked: false,
    //   };
    //   todos.push(objTodo); //добавляем его в массив
    //   setItem(); //устанавливаем значение в localStorage

    createTodo(inputSearch.value, dateNow); //передаем все необходимые значения
    inputSearch.value = "";
  });
  const deleteAllInputs = buttonDeleteAll.addEventListener("click", () => {
    list.innerHTML = "";
  });
  const deleteInput = buttonDeleteLast.addEventListener("click", () => {
    let arrList = Array.from(list.children);
    arrList.pop()?.remove(); //сохраняем последний элемент списка и удаляем его
  });
}
createHeader();

// ul-list
const list = createElement({
  tag: "ul",
  className: ["list"],
  place: mainContainer,
});

// todo-item function
function createTodo(valueRecord, dateNow) {
  const item = createElement({
    tag: "li",
    className: ["item"],
    place: list,
  });

  const containerInItem = createElement({
    tag: "div",
    className: ["container"],
    place: item,
  });

  const checkbox = createElement({
    tag: "input",
    className: ["container-checkbox"],
    place: containerInItem,
    text: undefined,
    attribute: { type: "checkbox" },
  });

  const containerRecord = createElement({
    tag: "div",
    className: ["container-record"],
    place: containerInItem,
  });

  const record = createElement({
    tag: "h2",
    className: ["container-record__text"],
    place: containerRecord,
    text: valueRecord,
  });

  const containerRight = createElement({
    tag: "div",
    className: ["container", "container_width"],
    place: containerInItem,
  });

  const closeButton = createElement({
    tag: "div",
    className: ["container__button"],
    place: containerRight,
  });

  const date = createElement({
    tag: "h2",
    className: ["container__date"],
    place: containerRight,
    text: dateNow,
  });

  // click
  const deleteInputCloseBox = closeButton.addEventListener("click", () => {
    item.remove(); //удаляем родителя
  });

  const completedItem = checkbox.addEventListener("change", (event) => {
    console.log(event.target);
    item.classList.toggle("item_completed"); //если класс есть - удаляем,если нет - добавляем
  });
}
// localStorage
//   setName(getName(date, record, checkbox));

// localStorage
//const todos = [];

// function getName(date, record, checkbox) {
//   const objTodos = {};
//   objTodos.id = Date.now();
//   objTodos.date = date.innerText;
//   objTodos.text = record.innerText;
//   objTodos.isChecked = checkbox.checked;

//   return objTodos;
// }

// function setName(objTodos) {
//   todos.push(objTodos);
//   return todos;
// }

// const parseTodos = JSON.parse(localStorage.getItem("todos")) || [];

// function renderItems() {
//   if (parseTodos.length !== 0) {
//     parseTodos.forEach((element) => {
//       createTodo(element.text, element.date, element.checkbox);
//     });
//   }
// }
// renderItems();

// function setDate() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
