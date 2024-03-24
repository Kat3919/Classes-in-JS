//1. Кнопка с кликом на неё => Hi
const a = document.getElementById("root");
const newW = document.createElement("div");
a.append(newW);
const btn = document.createElement("button");
newW.append(btn);
a.addEventListener("click", () => alert("Hi!"));
